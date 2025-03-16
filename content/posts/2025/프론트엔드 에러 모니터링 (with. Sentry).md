---
title: "프론트엔드 에러 모니터링"
description: "프론트엔드에서 어떻게 에러를 모니터링할까?"
tag: "Sentry"
date: "2025-02-14"
---

서비스를 배포하고 지속적으로 유지보수하려면 발생하는 에러를 신속하게 분석하고 대응할 수 있어야 합니다.

하지만 개발 환경에서 볼 수 있는 에러는 한정적입니다. 다양한 기기와 버전, 환경을 모두 테스트하는 것은 불가능에 가깝기 때문입니다. 우리는 사용자가 어떤 기기를 사용하고, 어떤 소프트웨어와 브라우저 버전을 사용하고 있는지 예측할 수 없습니다. 게다가 사용자에게 이를 직접 묻는 것도 현실적으로 어려운 일입니다. 이러한 예기치 못한 상황에서 발생하는 에러를 분석하고 대응하려면 **모니터링 툴**이 필요합니다.

프론트엔드에서 오류를 탐지하는 다양한 모니터링 툴이 존재하는데, 그 중에서도 널리 사용되는 툴인 [Sentry](https://sentry.io/for/frontend/)에 대해 소개해보겠습니다.

# Sentry

오류를 탐지하기 위한 프론트엔드 모니터링 툴은 여러 가지가 존재합니다. 그 중 널리 사용되고 있는 [Sentry](https://sentry.io/for/frontend/)에 대해서 소개해보고자 합니다.

![image.png](attachment:375290c7-4173-4bca-baf9-269f0090e4b3:image.png)

Sentry는 **실시간 로그 수집 및 분석 도구이자 모니터링 플랫폼**으로, 로그를 통해 발생한 이벤트에 대한 다양한 정보를 제공하고 이를 효과적으로 분석할 수 있게 돕습니다. 이벤트가 발생한 시점과 타임라인을 확인할 수 있으며, 필요한 경우 알림을 설정하여 실시간으로 오류를 추적할 수 있습니다. Sentry는 단순히 로그를 수집하는 것에 그치지 않고, 이를 시각적으로 분석할 수 있는 도구도 제공합니다. 또한, 다양한 플랫폼과 통합이 가능합니다.

다음은 Sentry의 주요 특징에 대해 간략하게 설명한 내용입니다.

1. **이벤트 로그 상세 정보 제공**

   Sentry는 이벤트가 발생했을 때 관련된 다양한 정보를 제공합니다.

   - **Exception & Message**: 발생한 이벤트 로그의 메시지 및 코드 라인 정보 (정확한 코드 라인 정보는 source map 설정을 통해 확인할 수 있습니다.)
   - **Device**: 이벤트가 발생한 장치의 정보 (이름, 모델, 메모리 등)
   - **Browser**: 이벤트가 발생한 브라우저의 정보 (브라우저 이름, 버전 등)
   - **OS**: 이벤트가 발생한 운영 체제의 정보 (이름, 버전, 빌드, 커널 버전 등)
   - **Breadcrumbs**: 이벤트 발생 과정에서의 정보

   또한, 기본적으로 제공되는 정보 외에도 **Context** 기능을 사용해 특정 이벤트에 대한 추가 정보를 수집할 수 있습니다. **Context**에 대한 자세한 내용은 이 아티클의 [하단](https://tech.kakaopay.com/post/frontend-sentry-monitoring/#-context)에서 확인하실 수 있습니다.

2. **유사 오류 통합**

   Sentry는 **이슈 그룹화(Issue Grouping)** 기능을 통해 유사한 이벤트 로그를 하나의 이슈로 묶어 관리할 수 있습니다. 이를 통해 비슷한 오류를 빠르게 식별하고 추적할 수 있어 매우 유용합니다.

3. **다양한 알림 채널 지원**

   발생한 이슈에 대해 실시간 알림을 받을 수 있는 다양한 채널을 지원합니다. 예를 들어, Slack, Teams, Jira, GitHub 등과 연동하여 알림을 받을 수 있습니다. 현재 제 회사에서는 Slack을 통해 실시간으로 오류를 추적하고 있습니다.

# 코드보며 이해하기 (with Sentry/react)

제 회사에서는 프론트엔드 기술 스택으로 주로 **React**를 사용하고 있습니다. 이번에는 React 환경에서 Sentry를 설정하고 데이터를 쌓을 수 있는 기본 기능에 대해 살펴보겠습니다.

## **설치 및 설정**

- **설치**
  Sentry를 사용하기 위해 필요한 패키지를 설치합니다. Sentry는 애플리케이션 런타임 내에서 SDK를 활용해 데이터를 캡처하므로 `@sentry/react`, `@sentry/tracing` 패키지를 설치해야 합니다.

  ```bash
  # npm 사용
  npm install --save @sentry/react @sentry/tracing

  # yarn 사용
  yarn add @sentry/react @sentry/tracing
  ```

  `@sentry/browser`에서 제공되는 모든 메소드는 `@sentry/react`에서도 사용할 수 있습니다.

- **설정**

  ```jsx
  import React from "react";
  import ReactDOM from "react-dom";
  import * as Sentry from "@sentry/react";
  import { BrowserTracing } from "@sentry/tracing";
  import App from "./App";

  Sentry.init({
    dsn: "dsn key",
    release: "release version",
    environment: "production",
    normalizeDepth: 6,
    integrations: [
      new Sentry.Integrations.Breadcrumbs({ console: true }),
      new BrowserTracing(),
    ],
  });

  ReactDOM.render(<App />, document.getElementById("root"));
  ```

  Sentry 설정을 위한 주요 항목은 다음과 같습니다:

  - **dsn**: 이벤트를 전송할 때 사용하는 식별 키
  - **release**: 애플리케이션 버전 (보통 `package.json`에 명시된 버전 사용, 이는 버전별 오류 추적을 용이하게 합니다)
  - **environment**: 애플리케이션 환경 (예: dev, production 등)
  - **normalizeDepth**: 컨텍스트 데이터를 주어진 깊이까지 정규화 (기본값: 3)
  - **integrations**: 플랫폼 SDK와의 통합 설정 (React에서는 `react-router` 통합 설정 가능) 이벤트를 전송하기 전 선택적으로 데이터를 수정할 수 있는 `beforeSend`와 같은 옵션도 제공합니다.
    추가적인 설정 옵션은 [공식 문서](https://docs.sentry.io/platforms/javascript/guides/react/configuration/options/)에서 확인할 수 있습니다.

추가적으로 React SDK는 자동으로 JavaScript 오류를 탐지하고 Sentry로 전송할 수 있도록 Error Boundary 컴포넌트를 제공하며 다음과 같이 사용할 수 있습니다.

```jsx
import React from "react";
import * as Sentry from "@Sentry/react";

<Sentry.ErrorBoundary
  fallback={<p>에러가 발생하였습니다. 잠시 후 다시 시도해주세요.</p>}
>
  <Example />
</Sentry.ErrorBoundary>;
```

## Sentry로 에러 전송하기

이제 Sentry를 통해 에러를 전송해 봅시다.

**`captureException`**

- **목적**: 예외(오류)가 발생했을 때, 그 오류에 대한 정보를 Sentry로 전송하는 데 사용됩니다.
- **사용법**: 일반적으로 `try-catch` 구문과 함께 사용하여 예외를 처리한 뒤, 그 예외를 Sentry로 전송합니다.

```jsx
try {
  // 오류가 발생할 수 있는 코드
  throw new Error("Something went wrong!");
} catch (error) {
  Sentry.captureException(error);
}
```

- **주요 특징**:
  - 예외 객체를 그대로 전송하기 때문에 오류의 스택 트레이스와 상세한 정보를 포함합니다.
  - 자동으로 오류 발생 위치와 관련된 정보를 포함해, 오류를 추적하기 쉽게 도와줍니다.

**`captureMessage`**

- **목적**: 단순한 메시지나 경고를 전송하고 싶을 때 사용됩니다. 예외가 아니라 특정 상황에 대한 메시지를 로깅하고 싶을 때 유용합니다.
- **사용법**: 예외 없이 단순히 메시지를 전송할 때 사용됩니다.

```jsx
Sentry.captureMessage("This is a custom warning message", "warning");
```

- **주요 특징**:
  - `captureMessage`는 예외가 아니므로, 메시지 자체와 그 수준(level)을 지정할 수 있습니다.
  - `"info"`, `"warning"`, `"error"` 등의 메시지 레벨을 설정할 수 있습니다.

Sentry의 전송 API는 위의 예시 외에도 다양한 추가 기능을 제공합니다.

| API                | 설명                                                  |
| ------------------ | ----------------------------------------------------- |
| `captureEvent`     | 사용자 정의 이벤트 객체를 직접 전송                   |
| `captureException` | 예외 객체를 전송 (기존)                               |
| `captureMessage`   | 단순 메시지 전송 (기존)                               |
| `addBreadcrumb`    | 로그나 이벤트에 대한 추가적인 정보를 기록             |
| `setUser`          | 사용자 정보를 설정하여 해당 사용자에 대한 이벤트 추적 |
| `setTag`           | 이벤트에 태그를 추가하여 필터링을 용이하게 함         |
| `setContext`       | 이벤트에 추가적인 컨텍스트(상황 정보)를 설정          |

## Scope의 주요 기능

Sentry는 `scope` **단위로 이벤트 데이터를 관리**합니다. 이벤트가 전송되면 해당 이벤트의 데이터를 현재 `scope`의 추가 정보와 병합합니다.

### configureScope - 스코프 전역 설정

1. **User Information (사용자 정보)**

   - 사용자의 ID, 이름, 이메일 등을 추가하여 발생한 에러가 어느 사용자에게 관련된 것인지 추적할 수 있습니다.

   ```jsx
   Sentry.configureScope((scope) => {
     scope.setUser({ id: "123", email: "user@example.com" });
   });
   ```

2. **Tags (태그)**

   - 이벤트에 대한 추가적인 메타데이터를 태그로 붙여서, 나중에 Sentry 대시보드에서 에러를 필터링하거나 분석하는 데 유용합니다.

   ```jsx
   Sentry.configureScope((scope) => {
     scope.setTag("feature", "checkout");
   });
   ```

3. **Extra Data (추가 데이터)**

   - 에러 발생 시 더 많은 정보를 함께 전송할 수 있습니다. 예를 들어, 특정 상태나 환경 변수, 앱의 상태 등을 추가할 수 있습니다.

   ```jsx
   Sentry.configureScope((scope) => {
     scope.setExtra("app_version", "1.0.0");
   });
   ```

4. **Breadcrumbs (브레드크럼)**

   - 사용자가 수행한 특정 작업들을 기록하여, 에러가 발생하기 전 어떤 일이 있었는지 추적할 수 있습니다. 이를 통해 에러 발생 경로를 추적할 수 있습니다.

   ```jsx
   Sentry.addBreadcrumb({
     message: "User clicked checkout button",
     level: "info",
   });
   ```

5. **Clearing Scope**

   - 특정 이벤트가 발생한 후, 범위를 초기화하거나 변경할 수 있습니다. 예를 들어, 특정 사용자에 대한 이벤트를 추적한 후, 그 범위를 리셋할 수 있습니다.

   ```jsx
   Sentry.configureScope((scope) => {
     scope.setUser(null); // 사용자 정보 초기화
   });
   ```

### withScope - 스코프 지역 설정

기본적으로 `Sentry.configureScope()`는 전역적으로 설정을 변경하지만, `withScope`는 **특정 블록 내에서만** `scope` 설정을 적용하도록 제한할 수 있습니다. 이를 통해 에러를 발생시킬 때 해당 블록 내에서만 `scope` 설정이 영향을 미치게 됩니다.

### 주요 용도

- **일시적인 범위 설정**: `withScope`를 사용하면 한 번의 에러를 기록할 때, 그 에러에 대한 `user`, `tags`, `extra data` 등을 **한정적으로 설정**할 수 있습니다. 이 설정은 블록 내에서만 유효하고, 블록을 벗어나면 자동으로 이전 상태로 돌아갑니다.

### 사용 예시

```jsx
Sentry.withScope((scope) => {
  // 이 블록 내에서만 scope가 설정됩니다.
  scope.setUser({ id: "123", email: "user@example.com" });
  scope.setTag("page", "checkout");

  // 범위 내에서 발생한 이벤트는 설정된 사용자 정보와 태그를 포함
  Sentry.captureException(new Error("Something went wrong"));
});
```

### Custom Context

Sentry에서는 기본적인 정보 외에도 **custom context**를 추가하여, 개발자가 정의한 특정 정보도 함께 전달할 수 있습니다. 예를 들어, 특정 API 호출의 응답 데이터나 사용자가 선택한 옵션을 기록하는 등의 작업이 가능합니다.

```jsx
Sentry.configureScope((scope) => {
  scope.setContext("api_call", {
    endpoint: "/users",
    method: "POST",
    status: "failed",
  });
});
```

### Customized Tags (커스텀 태그)

에러나 이벤트에 **사용자가 정의한 태그**를 추가하여, 나중에 Sentry 대시보드에서 보다 **세부적으로 필터링**하거나 **분석**할 수 있도록 돕는 기능입니다. 태그는 주로 이벤트나 에러의 **특징적인 속성**을 나타내는 데 사용되며, 이를 통해 에러를 그룹화하거나, 특정 조건에 맞는 에러들을 쉽게 검색하고 추적할 수 있습니다.

### 커스텀 태그의 용도

1. **에러 분류**: 태그를 사용하면 이벤트가 발생한 환경이나 조건에 대한 정보를 제공하여, 다양한 조건으로 에러를 구분할 수 있습니다. 예를 들어, 특정 기능에서 발생한 에러를 필터링하거나, 사용자의 지역, 버전, 요청 타입 등을 기반으로 에러를 그룹화할 수 있습니다.
2. **에러 추적 및 분석**: 에러의 발생 원인을 찾기 위해 다양한 태그를 추가하여, 시간, 사용자 정보, 특정 기능 등을 기준으로 에러를 분석할 수 있습니다.

`scope.setTag()`를 사용하여 커스텀 태그를 설정할 수 있습니다. 예를 들어, 특정 페이지나 기능에서 발생한 에러를 태그로 기록할 수 있습니다.

```jsx
Sentry.configureScope((scope) => {
  scope.setTag("feature", "checkout");
});
```

### 이슈 그룹화

Sentry에서는 이벤트가 fingerprint를 기반으로 자동 그룹화됩니다. fingerprint는 stacktrace, exception, message 등 정보를 바탕으로 생성되며, 같은 fingerprint를 가진 이벤트는 하나의 이슈로 묶입니다. 그러나 때때로 이슈 그룹화가 예상과 다르게 이루어질 수 있습니다. 예를 들어, 동일한 API에서 발생한 400, 404, 500 오류는 요청 URI가 같으면 하나의 이슈로 묶입니다. 이를 해결하려면 HTTP method, status, url을 fingerprint 조건으로 설정하여 각각의 오류를 독립적인 이슈로 그룹화할 수 있습니다.

```jsx
import * as Sentry from "@Sentry/react";

const { method, url } = error.config; // axios의 error객체
const { status } = error.response; // axios의 error객체

Sentry.setFingerprint([method, status, url]);
```

Sentry는 이 외에도 Level과 같이 태깅을 하여 에러를 그룹화 하거나, Error 객체를 확장하여 사용자화할 수 있습니다. 이렇게 이슈를 그룹화 하면 동일한 에러 객체로 생성되어 전송된 이벤트들끼리 그룹화 되어 해당 이슈의 빈도나 발생 케이스를 파악할 수 있게 됩니다.

# 마치며

발생하는 모든 이벤트를 모니터링하고 알람을 받는 것은 매우 비생산적인 일입니다. 따라서 서비스의 성격에 따라 알람을 받기 원하는 조건과 임계치(threshold)를 잘 설정해야 합니다. 위에서 소개했던 기능들은 알람에서 알람 조건을 설정할 때 유용하게 사용될 수 있습니다.

API 오류 중 500 에러에 대해서만 알람을 받고 싶다면 `tag`과 `level`기능을 이용하여 설정해볼 수 있습니다. 예를 들어 API 500 에러에 대해 `level`을 `Error`로, 이벤트의 `tag`를 `api`로 설정하면 관련한 이벤트를 추려낼 수가 있게 됩니다. 이 알람 조건은 이벤트나 이슈 검색 조건으로 활용될 수도 있습니다.

또한 API 오류의 경우 사용량이 많은 애플리케이션에서는 HTTP status가 400, 401, 404, 204인 이벤트 수집은 큰 도움이 되지 않을 수 있습니다. 그러나 사용자 경험을 감지하는데 유용하다고 생각된다면 internal server error(500) 이벤트를 수집하고 분석하는 것이 많은 도움이 될 수 있습니다.
