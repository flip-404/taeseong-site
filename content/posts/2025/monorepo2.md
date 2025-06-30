---
title: '모노레포 적용하기 with 🚀Turborepo (2/2)'
description: '모노레포에 대해 정리해보았습니다.'
tags: ['Monorepo', 'Turborepo']
date: '2025-01-05'
---

# Turborepo 도입기

이번에 회사에서 새 프로젝트에 돌입하는데, 하나의 시스템을 위한 서비스가 총 3가지였습니다. 그 3가지는 각 웹+앱, only 앱, only 웹으로 구성되는데, React와 React-native를 기술스택으로 선정하여 진행하기로 했습니다. 3가지 서비스에서 공통적으로 사용되는 모듈이나 컴포넌트를 관리하기 위해 모노레포 방식을 도입하기로 했고, 이를 돕기 위한 도구로 Turborepo를 도입하기로 했습니다.

## Turborepo란?

공식 문서 설명에 따르면, JavaScript나 TypeScript 코드를 위해 최적화된 빌드 시스템입니다. JavaScript와 TypeScript의 린트나 빌드, 테스트와 같은 코드베이스 작업은 시간이 꽤 소요되는 작업인데, Turborepo는 캐싱을 통해 로컬 설정을 진행하고 CI 속도를 높여줍니다.

또한, Vercel에서 개발하고 있다는 점도 큰 장점입니다.

## 기능

Turborepo는 향상된 빌드 시스템 기술을 사용하여 로컬에서나 CI/CD를 할 때 개발 속도를 높여줍니다.

먼저 캐싱을 사용하기 때문에 동일한 작업을 진행하지 않으며, 스케쥴링 및 CPU 유휴를 최소한으로 하며 병렬적으로 작업을 수행하기 때문에 멀티태스킹 능력을 극대화했습니다.

## Turborepo 설치

```bash
npm install turbo --global

yarn global add turbo

pnpm install turbo --global
```

전역으로 설치하고 나면, 작업 공간으로부터 바로 실행할 수 있습니다.

혹은 레포지터리별로 실행하고자 할 때 아래와 같은 커맨드를 입력합니다.

```bash
npm install turbo --dev

yarn add turbo --dev --ignore-workspace-root-check

pnpm add turbo --save-dev --ignore-workspace-root-check
```

## 새 모노레포 생성

### create-turbo 실행

새롭게 모노레포를 사용하기 위해서 create-turbo 패키지를 사용합니다.

```bash
npx create-turbo@latest

# 또는
yarn dlx create-turbo@latest

# 또는
pnpm dlx create-turbo@latest
```

### 설치 파일 확인

create-turbo를 설치하면 아래와 같은 디렉토리 구조가 생성됩니다.

- `apps` 하위의 각 디렉토리는 프로젝트를 뜻합니다.
  - apps/docs
  - apps/web
- `packages` 하위 요소들은 각 프로젝트에서 공통으로 사용하는 패키지들을 뜻합니다.
  - packages/eslint-config-custom
  - packages/tsconfig
  - packages/ui

위 디렉터리는 각각 package.json을 포함하는 폴더들로 개별적으로 코드를 작성하고 의존성을 사용하지만, 다른 작업 공간에서도 그 코드를 사용할 수 있습니다.

### packages/ui

![package.json 이미지](https://velog.velcdn.com/images/flip_404/post/29b4beec-5dea-47cb-ac7c-a8392dec55e0/image.png)

`./packages/ui/package.json`을 열면 상단에 `"name": "ui"`로 적혀 있는 것을 확인할 수 있습니다.

그다음 `./apps/web/package.json`에서도 `"name": "web"`이라고 적혀있습니다.

이때, "web" 작업공간은 "ui"라고 불리는 package를 의존하고 있는 것을 볼 수 있습니다.

```json
{
  "dependencies": {
    "ui": "*"
  }
}
```

이는 web 앱이 로컬 ui 패키지를 의존하고 있음을 의미합니다.

`apps/docs/package.json`도 마찬가지로 ui를 의존하고 있습니다.

이렇게 애플리케이션을 넘어 코드를 공유하는 패턴은 모노레포에서 매우 흔하게 사용되는 패턴입니다.

### imports와 exports

`./apps/docs/pages/index.tsx` 파일을 살펴보면, docs와 web 애플리케이션 모두 Next.js 기반 애플리케이션이며, 둘 모두 비슷한 방법으로 ui 라이브러리를 사용하고 있습니다.

ui에서 Button을 직접 가져오는데 이는 ui 앱의 package.json을 보면 어떻게 사용할 수 있는 것인지 확인할 수 있습니다.

```json
{
  "main": "./index.tsx",
  "types": "./index.tsx"
}
```

ui에서 작업공간을 불러올 때, main에서 내가 가져오려는 코드에 접근할 수 있는 위치를 알려주며, types는 TypeScript가 위치한 곳을 알려줍니다.

packages/ui/index.tsx 파일을 살펴봅시다:

```tsx
// packages/ui/index.tsx
import * as React from 'react';
export * from './Button';
```

해당 파일에 있는 것은 ui에 의존하는 web이나 docs 등 모든 작업 공간이 사용할 수 있습니다.

index.tsx는 ./Button에 있는 것들을 모두 내보냅니다.

```tsx
// packages/ui/Button.tsx
import * as React from 'react';

export const Button = () => {
  return <button>Boop</button>;
};
```

여기서 변경하는 모든 코드들은 web과 docs 등 다른 작업 공간에 모두 공유됩니다.

### tsconfig

packages 폴더에는 tsconfig와 eslint-config-custom이라는 작업 공간이 존재합니다. 두 작업 공간은 각각 모노레포의 설정을 공유합니다. tsconfig 파일을 먼저 확인해보겠습니다.

```json
{
  "name": "tsconfig",
  "version": "0.0.0",
  "private": true,
  "license": "MIT",
  "publishConfig": {
    "access": "public"
  },
  "files": ["base.json", "nextjs.json", "react-library.json"]
}
```

files에는 세 가지 파일이 내보내지고 있습니다. 즉, tsconfig에 종속된 패키지들을 직접 가져올 수 있다는 것을 의미합니다.

예를 들어, `packages/ui/package.json`에서 tsconfig을 의존하고 있습니다.

```json
{
  "devDependencies": {
    "tsconfig": "*"
  }
}
```

그리고 ui의 tsconfig.json 파일 안에서는 extends 프로퍼티를 통해 tsconfig 앱의 파일을 가져오고 있습니다.

```json
{
  "extends": "tsconfig/react-library.json"
}
```

이러한 패턴은 모노레포에서 tsconfig.json을 다른 모든 작업 공간이 공유하여 코드 중복을 줄여줍니다.

## Turborepo 설정 쉽게 이해하기

Turborepo는 모노레포 환경에서 프로젝트를 효율적으로 관리할 수 있도록 도와주는 도구입니다. 이제 Turborepo가 어떻게 설정되어 있는지 자세히 살펴보겠습니다.

### 1. tsconfig 설정

**tsconfig 역할**

- packages/tsconfig 폴더에는 여러 작업 공간에서 공유할 수 있는 tsconfig 설정이 들어 있습니다.
- base.json, nextjs.json, react-library.json 파일이 있으며, 각 환경에 맞게 TypeScript 설정을 적용할 수 있습니다.

**예제: ui 패키지에서 tsconfig 사용하기**

- packages/ui 패키지는 tsconfig를 의존성으로 추가하여 사용합니다.

```json
{
  "devDependencies": {
    "tsconfig": "*"
  }
}
```

- packages/ui/tsconfig.json에서 extends를 통해 tsconfig/react-library.json 파일을 가져옵니다.

```json
{
  "extends": "tsconfig/react-library.json"
}
```

**이점:**

- 모노레포 내 모든 패키지가 동일한 tsconfig.json 설정을 공유하므로 코드 중복을 줄이고, 관리가 쉬워집니다.

### 2. ESLint 설정 (eslint-config-custom)

**eslint-config-custom 역할**

- packages/eslint-config-custom은 ESLint 설정을 모노레포 전체에서 공유하기 위한 패키지입니다.
- 여러 패키지에서 동일한 코드 스타일을 유지하도록 도와줍니다.

**.eslintrc.js 예제**

```js
module.exports = {
  extends: ['next', 'turbo', 'prettier'],
};
```

- extends: ["next", "turbo", "prettier"]를 통해 Next.js, Turborepo, Prettier 설정을 포함합니다.

**예제: docs 패키지에서 ESLint 설정 사용하기**

- apps/docs/.eslintrc.js에서 custom 설정을 확장합니다.

```js
module.exports = {
  root: true,
  extends: ['custom'],
};
```

**이점:**

- 모든 패키지가 동일한 ESLint 규칙을 따르므로 일관된 코드 스타일을 유지할 수 있습니다.

### 3. Turborepo 설정 (turbo.json)

**Turborepo 역할**

- 여러 패키지에서 실행되는 빌드, 린트, 개발 서버 실행을 최적화합니다.
- turbo.json에서 실행할 수 있는 명령어와 캐시 설정을 정의합니다.

**turbo.json 예제**

```json
{
  "$schema": "https://turbo.build/schema.json",
  "globalDependencies": ["**/.env.*local"],
  "pipeline": {
    "build": {
      "outputs": [".next/**", "!.next/cache/**"]
    },
    "lint": {},
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
```

**주요 설정 해석:**

- build: .next/ 폴더를 빌드 결과물로 캐시함
- lint: 실행 가능
- dev:
  - cache: false → 개발 서버 실행 결과를 캐시하지 않음
  - persistent: true → 개발 서버가 지속 실행됨

### 4. Turborepo 명령어 사용법

**Turborepo로 ESLint 실행하기**

```bash
turbo lint
```

**실행하면 다음이 발생합니다:**

- docs:lint, ui:lint, web:lint가 동시에 실행됨
- 성공적으로 완료되면 3 successful 출력
- 0 cached, 3 total → 모든 작업이 새롭게 실행됨

**package.json 내부의 lint 스크립트 예제:**

```json
// apps/web/package.json
{
  "scripts": {
    "lint": "next lint"
  }
}

// packages/ui/package.json
{
  "scripts": {
    "lint": "eslint *.ts*"
  }
}
```

**캐시 활용 (Using the cache)**

🚀 lint를 다시 실행하면 어떤 일이 발생할까?

- docs:lint, web:lint, ui:lint에서 cache hit, replaying output 출력
- 3 cached, 3 total → 캐시 덕분에 즉시 완료됨
- 실행 시간이 100ms 이하로 단축되고 >>> FULL TURBO 출력

**코드 변경 후 실행해보기**

```tsx
// apps/docs/pages/index.tsx
import { Button } from 'ui';

export default function Docs() {
  return (
    <div>
      - <h1>Docs</h1>+ <h1>My great docs</h1>
      <Button />
    </div>
  );
}
```

**다시 lint 실행 시:**

- docs:lint는 cache miss → 변경된 부분이 있어서 새로 실행
- 2 cached, 3 total → 나머지 작업은 캐시에서 가져옴

**결과:**

- 변경된 부분만 새로 실행하므로 속도가 훨씬 빠름!

### 5. 빌드 명령어 실행 (turbo build)

```bash
turbo build
```

**실행하면 다음이 발생합니다:**

- apps/docs, apps/web에서 빌드 실행
- turbo.json에 outputs: [".next/**", "!.next/cache/**"] 설정이 있어서 .next/ 폴더를 캐시로 저장

**.next/ 폴더를 삭제 후 다시 빌드하면?**

- .next/ 폴더가 다시 생성되고 FULL TURBO 출력됨
- 이전 빌드 결과가 캐시에서 복원되므로 실행 속도가 빨라짐!

### 6. 개발 서버 실행 (turbo dev)

```bash
turbo dev
```

**실행하면 다음이 발생합니다:**

- docs:dev, web:dev 실행
- Next.js 앱이 포트 3000, 3001에서 실행됨
- cache bypass, force executing 로그 출력

**turbo.json에서 dev 설정 확인**

```json
{
  "pipeline": {
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
```

**캐시를 사용하지 않는 이유?**

- 개발 서버는 지속 실행되며, 캐시할 결과물이 없음
- "persistent": true → 터보가 개발 서버가 계속 실행 중임을 인식하여 다른 작업을 막지 않음

### 7. 특정 작업 공간에서만 dev 실행하기

\*\*기본적으로 turbo dev는 모든 패키지의 dev 명령어를 실행하지만, 특정 작업 공간만 실행하고 싶다면?

```bash
turbo dev --filter=web
```

해당 옵션을 주면 apps/web에서만 dev 서버가 실행된다.

## 정리

- tsconfig → TypeScript 설정을 모노레포 전체에서 공유
- eslint-config-custom → ESLint 설정을 통합하여 일관된 코드 스타일 유지
- turbo.json → 빌드, lint, dev 명령어를 정의하고 캐시 활용
- Turborepo 캐시 → 이전 실행 결과를 저장하여 빠른 실행 가능
- 특정 작업 공간에서 실행 → --filter 플래그 사용

## Turborepo와 pnpm

Turborepo는 pnpm을 추천하는데, 그 이유는 다음과 같습니다.

### 1. 더 빠른 패키지 설치

- pnpm은 하드 링크와 심볼릭 링크를 사용하여 중복 패키지를 최소화합니다.
- 같은 패키지를 여러 번 설치하지 않고, 공유 저장소에서 참조하므로 설치 속도가 빠릅니다.

### 2. 저장 공간 절약

- 기존 npm과 yarn은 각 프로젝트마다 node_modules를 따로 생성하지만, pnpm은 전역 저장소를 활용하여 디스크 사용량을 줄입니다.

### 3. 모노레포에서 강력한 워크스페이스 지원

- pnpm workspaces는 각 패키지 간 의존성을 빠르게 해석하고, 중복 설치를 줄여 빌드 속도를 향상시킵니다.

### 4. 의존성 격리로 안정성 보장

- pnpm은 node_modules에 실제 파일을 직접 저장하지 않고, 프로젝트마다 필요한 패키지만 정확하게 참조합니다.
- 덕분에 버그 발생 가능성이 줄어들고, 패키지 관리가 더욱 안정적입니다.

## 결론

Turborepo와 pnpm 조합은 빠른 설치, 적은 용량, 뛰어난 모노레포 지원 덕분에 최적의 성능을 제공합니다. 모노레포를 활용하면 코드 재사용성을 높이고, 통일된 개발 환경을 유지하면서도 개발 속도를 크게 향상시킬 수 있습니다.
