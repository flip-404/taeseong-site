---
title: 'Turborepo에서 Tailwind v4 사용 시 공통 라이브러리 인식 문제 해결법'
description: "Turborepo 환경에서 Tailwind CSS v4를 사용하면서 공통 라이브러리(UI 패키지)의 스타일이 제대로 인식되지 않는 문제를 만났다. 이 글에서는 문제의 원인과 여러 가지 해결 방법을 정리해보았다."
tags: ["turborepo", "tailwind v4", "오류"]
date: "2025-05-22"
---


# Turborepo에서 Tailwind v4 사용 시 공통 라이브러리 인식 문제 해결법

Turborepo 환경에서 Tailwind CSS v4를 사용하면서 공통 라이브러리(UI 패키지)의 스타일이 제대로 인식되지 않는 문제를 만났다. 이 글에서는 문제의 원인과 여러 가지 해결 방법을 정리해보았다.

## 문제 상황

```
project/
├── apps/
│   ├── web/
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   ├── postcss.config.mjs
│   │   ├── tailwind.config.ts
├── packages/
│   ├── ui/
│   │   ├── src/
│   │   │   ├── styles/
│   │   │   │   │── global.css
│   │   ├── postcss.config.mjs
│   │   ├── tailwind.config.ts
```

위와 같은 monorepo 구조에서 Tailwind v4를 사용할 때, UI 패키지에서 정의한 컴포넌트의 Tailwind 클래스가 앱에서 제대로 적용되지 않는 문제가 발생했다.

## 핵심 원인

Tailwind v4에서는 설정 파일을 자동으로 감지하지 않는다. 따라서 CSS 파일에서 명시적으로 설정 파일을 참조해야 한다.

## 해결 방법들

### 방법 1: @config 지시어 사용 (권장)

**UI 패키지 설정:**

```css
/* packages/ui/src/styles/global.css */
@import 'tailwindcss';
@config "../../tailwind.config.ts"; /* v4에서 핵심! */

/* 추가 스타일... */
```

```typescript
// packages/ui/tailwind.config.ts
import type { Config } from "tailwindcss";

const config = {
  // UI 패키지에 있지만 앱에서도 사용되므로 경로 주의
  content: ["app/**/*.{ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}"],
} satisfies Config;

export default config;
```

```javascript
// packages/ui/postcss.config.mjs
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
```

**앱에서 설정:**

```tsx
// apps/web/app/layout.tsx
import '@repo/ui/src/styles/global.css';
// ...
```

```javascript
// apps/web/postcss.config.mjs
export { default } from "@repo/ui/postcss.config";
```

```typescript
// apps/web/tailwind.config.ts
export * from "@repo/ui/tailwind.config";
```

### 방법 2: @source 지시어 사용

더 간단한 접근법으로 `@source` 지시어를 사용할 수 있다:

```css
/* packages/ui/styles.css */
@import "tailwindcss";
@source "./";
```

```json
/* packages/ui/package.json */
{
  "exports": {
    "./styles.css": "./styles.css"
  }
}
```

```css
/* apps/web/app/globals.css */
@import "tailwindcss";
@import "@repo/ui/styles.css";
```

### 방법 3: 루트 설정 파일 사용

앱 루트에 설정 파일을 만들고 CSS에서 참조하는 방법:

```javascript
// apps/web/tailwind.config.js
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

```css
/* apps/web/app/globals.css */
@config "../tailwind.config.js";
@import "tailwindcss";
```


## 커스텀 테마 사용하기

테마를 오버라이드하거나 확장할 때는 다음과 같이 사용할 수 있다:

```css
/* apps/web/app/globals.css */
@import "tailwindcss";
@import "@repo/ui/styles.css";

@theme {
  --font-primary: 'Arapey';
  --font-secondary: 'Work Sans';
  --color-success-0: #49c58b;
}
```

## 남아있는 문제: IntelliSense 지원

현재 커스텀 CSS 변수로 정의한 색상(예: `bg-success-0`)은 IntelliSense에서 자동완성되지 않는 문제가 있다. 이는 Tailwind v4와 TypeScript 지원이 아직 완전하지 않기 때문이다.

## 결론

Turborepo에서 Tailwind v4를 사용할 때 가장 중요한 포인트는 `@config` 지시어를 사용해 설정 파일을 명시적으로 참조하는 것이다. 

개인적으로는 **방법 1(@config 사용)**을 권장한다. 설정이 명확하고 각 패키지의 역할이 분명하며, 확장성도 좋기 때문이다.

Tailwind v4는 아직 초기 단계이므로 일부 기능(IntelliSense 등)이 완전하지 않을 수 있다. 하지만 위의 방법들을 통해 monorepo 환경에서도 충분히 활용할 수 있다.

