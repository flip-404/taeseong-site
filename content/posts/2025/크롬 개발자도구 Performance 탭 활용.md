---
title: "크롬 개발자도구 Performance 탭 활용"
description: "Performance 탭을 분석하여 사이트의 성능 개선이 필요한 부분을 파악하는 방법, 그리고 이에 대한 예시 코드를 작성해 보았습니다."
tags: ["Chrome Developer Tools", "Performance", "최적화"]
date: "2025-03-19"
---

# 크롬 개발자 도구 퍼포먼스 탭 활용법

<div style="display: flex; justify-content:center;"> 
<img src="https://velog.velcdn.com/images/flip_404/post/98594662-ab5f-4d20-a3aa-047d1dc84747/image.png" style="height: 400px"/>
</div>

웹 사이트나 애플리케이션의 성능은 사용자 경험에 직접적인 영향을 미치는 중요한 요소입니다. 페이지가 느리게 로드되거나, 클릭에 반응하지 않거나, 레이아웃이 갑자기 바뀌는 상황은 사용자를 짜증나게 만들고 이탈률을 높입니다. 크롬 개발자 도구의 퍼포먼스 탭은 이러한 성능 문제를 분석하고 해결하는 데 필수적인 도구입니다.

이 포스트에서는 Chrome의 퍼포먼스 탭을 활용하여 웹 성능 지표를 분석하고 최적화하는 방법을 상세히 알아보겠습니다.

## 핵심 웹 성능 지표 이해하기

### 1. LCP (Largest Contentful Paint)

LCP는 사용자가 페이지에 처음 접속한 시점부터 '가장 큰 콘텐츠 요소'가 화면에 표시되기까지 걸리는 시간을 측정합니다.

**의미:**

- 페이지의 주요 콘텐츠가 로드된 시점을 나타냅니다.
- 사용자 입장에서 '페이지가 로드됐다'고 인식하는 순간과 밀접한 관련이 있습니다.
- LCP 대상은 주로 큰 이미지, 텍스트 블록, 동영상 등입니다 (SVG는 포함되지 않음).

**문제 원인:**

- 서버 응답 시간이 느림
- 렌더링을 차단하는 JS, CSS 리소스
- 용량이 큰 리소스의 로드 지연

**개선 방법:**

- **서버 응답 속도 개선**: CDN 활용, 서버 캐싱 최적화
- **렌더링 차단 최소화**: CSS 인라인 처리, 비동기 스크립트(`async`, `defer`) 사용
- **리소스 최적화**: 이미지 압축, WebP 포맷 사용, 적절한 크기로 리사이징
- **폰트 로드 최적화**: `font-display: swap` 설정으로 텍스트 즉시 표시

### 2. CLS (Cumulative Layout Shift)

CLS는 페이지 로드 중 콘텐츠가 예기치 않게 이동하는 정도를 측정합니다.

**의미:**

- 시각적 안정성을 나타내는 지표입니다.
- 사용자가 클릭하려던 버튼이 갑자기 이동하는 등의 불쾌한 경험을 방지합니다.

**문제 원인:**

- 크기가 미리 지정되지 않은 이미지나 광고
- 동적으로 삽입되는 콘텐츠(팝업, 배너 등)
- 웹 폰트 로드로 인한 텍스트 이동(FOIT/FOUT)

**개선 방법:**

- **이미지 및 비디오 크기 지정**: `<img>` 태그에 `width`와 `height` 속성 추가
- **동적 콘텐츠 공간 예약**: 광고나 위젯이 들어갈 자리에 고정된 공간 확보
- **폰트 로드 개선**: `font-display: swap`으로 폰트 로드 중 기본 폰트 사용
- **CSS 애니메이션 관리**: `transform`과 같이 레이아웃 변화를 유발하지 않는 속성 활용

### 3. INP (Interaction to Next Paint)

INP는 사용자 상호작용(클릭, 키 입력, 터치 등) 후 브라우저가 다음 화면 업데이트를 완료하는 데 걸리는 시간을 측정합니다.

**의미:**

- 페이지의 반응성을 측정하는 지표입니다.
- 모든 상호작용 응답 시간 중 가장 느린 케이스에 가까운 값을 보여줍니다.

**문제 원인:**

- 메인 스레드를 차단하는 긴 JavaScript 작업(Long Tasks)
- 과도한 DOM 조작
- 비효율적인 이벤트 핸들러 처리

**개선 방법:**

- **JavaScript 실행 최적화**: 무거운 작업을 Web Worker로 분리하거나 코드 분할(Code Splitting) 적용
- **Long Tasks 줄이기**: 작업을 작은 단위로 분할하고 `requestIdleCallback` 활용
- **이벤트 처리 효율화**: 이벤트 리스너 최적화 및 디바운싱/스로틀링 적용
- **렌더링 최소화**: 불필요한 스타일/레이아웃 재계산 방지

## Performance 탭 녹화 및 분석하기

![](https://velog.velcdn.com/images/flip_404/post/22544eb3-1641-43ef-b92d-6ec9b4da9829/image.png)

크롬 개발자 도구의 Performance 탭을 사용하면 웹 페이지의 로드 및 실행 과정을 상세히 분석할 수 있습니다. 다음은 각 분석 뷰의 활용법입니다.

### 1. Summary 탭

Summary 탭은 기록된 데이터의 요약 정보를 제공하며, 작업 유형별로 소요된 시간 비율을 시각화합니다.

**주요 지표:**

- **Loading**: 네트워크 요청(HTML, CSS, JS 등 로드) 시간
- **Scripting**: JavaScript 실행 시간
- **Rendering**: 스타일 계산 및 레이아웃 작업 시간
- **Painting**: 실제 화면에 픽셀을 그리는 시간
- **System**: 브라우저 자체 작업 시간
- **Idle**: 메인 스레드가 아무 작업도 하지 않은 대기 시간

**활용 방법:**

- 각 작업이 전체 시간에서 차지하는 비율을 확인해 병목 지점을 파악합니다.
- 예를 들어, "Scripting" 비율이 높다면 JavaScript 코드 최적화가 필요합니다.

### 2. Bottom-Up 탭

Bottom-Up 탭은 작업을 호출한 함수를 기준으로 시간을 역순으로 정리하여, 어떤 함수가 가장 많은 시간을 소비했는지 보여줍니다.

**주요 지표:**

- **Self Time**: 함수 자체가 실행된 시간(하위 호출 제외)
- **Total Time**: 함수와 그 하위 호출까지 포함한 총 시간
- **Activity**: 호출된 함수 이름과 소스 파일 위치

**활용 방법:**

- Self Time이 긴 함수를 찾아 최적화 대상으로 삼습니다.
- 특정 함수나 모듈이 예상보다 많은 시간을 소비하는지 확인합니다.

### 3. Call Tree 탭

Call Tree 탭은 함수 호출의 계층 구조를 트리 형태로 출력합니다. 상위 함수에서 하위 함수로 어떻게 호출이 전파되었는지 확인할 수 있습니다.

**주요 지표:**

- **Self Time** 및 **Total Time**: Bottom-Up과 동일
- **Call Stack**: 함수 호출 경로(예: main() → render() → calculateStyle())
- **Source Location**: 함수가 정의된 파일과 줄 번호

**활용 방법:**

- 복잡한 호출 스택에서 병목 지점을 추적합니다.
- 상위 함수가 불필요한 하위 호출을 유발한다면 로직을 간소화합니다.

### 4. Event Log 탭

Event Log 탭은 기록 중 발생한 모든 이벤트(DOM 이벤트, 네트워크 요청, 타이머 등)를 시간순으로 나열합니다.

**주요 지표:**

- **Event Type**: 이벤트 종류(예: click, load, setTimeout)
- **Timestamp**: 이벤트 발생 시점
- **Duration**: 이벤트 처리에 걸린 시간
- **Details**: 이벤트와 관련된 추가 정보(예: 클릭된 요소)

**활용 방법:**

- 특정 사용자 상호작용이나 타이머가 성능에 미친 영향을 분석합니다.
- Click 이벤트 응답이 느리다면 해당 이벤트 핸들러를 최적화합니다.

## 실전 퍼포먼스 분석 워크플로우

실제 웹 성능 분석 및 최적화를 위한 단계별 접근 방법을 소개합니다.

### 1. 성능 측정 준비

- 시크릿 모드(확장 프로그램 영향 제거)에서 개발자 도구를 엽니다.
- 필요에 따라 네트워크 제한(3G, 4G 등)을 설정합니다.
- CPU 제한을 설정하여 저사양 기기 환경을 시뮬레이션할 수 있습니다.

### 2. 성능 녹화 실행

- Performance 탭에서 녹화 버튼을 클릭합니다.
- 관심 있는 작업(페이지 로드, 스크롤, 클릭 등)을 수행합니다.
- 녹화를 중지하고 결과를 분석합니다.

### 3. 주요 성능 지표 확인

- 타임라인에서 LCP, CLS, INP 등의 지표를 확인합니다.
- 문제가 되는 영역(빨간색으로 표시된 부분)을 중점적으로 살펴봅니다.

### 4. 병목 지점 분석

- Summary 탭에서 가장 많은 시간을 차지하는 작업 유형을 확인합니다.
- Bottom-Up 또는 Call Tree 탭에서 시간을 많이 소비하는 함수를 식별합니다.
- Event Log에서 느린 이벤트 핸들러를 찾습니다.

### 5. 최적화 및 재측정

- 식별된 문제점에 대한 해결책을 적용합니다.
- 변경 후 다시 성능을 측정하여 개선 효과를 확인합니다.
- 목표 성능 지표에 도달할 때까지 반복합니다.

## 자주 발견되는 성능 문제와 해결책

### 1. 무거운 JavaScript 실행

- **문제**: 메인 스레드를 차단하는 긴 JavaScript 작업으로 인한 응답 지연
- **해결책**:
  - 코드 분할(Code Splitting)로 필요한 JS만 로드
  - Web Worker로 무거운 계산 작업 이동
  - 이벤트 핸들러 최적화 및 디바운싱/스로틀링 적용

<details style="color: #50a14f; margin: 4px; cursor: pointer;">
<summary><strong>예시 코드: 코드 분할 (Code Splitting)</strong></summary>

```javascript
// 기존 방식 (모든 코드를 한 번에 로드)
import { heavyFunction } from "./heavyModule";

function handleClick() {
  heavyFunction();
}

// 최적화 방식 (필요할 때만 동적 import)
function handleClick() {
  import("./heavyModule").then((module) => {
    module.heavyFunction();
  });
}
```

</details>

<details style="color: #50a14f; margin: 4px; cursor: pointer;">
<summary><strong>예시 코드: Web Worker 활용</strong></summary>

```javascript
// main.js (메인 스레드)
const worker = new Worker("worker.js");

// 무거운 작업을 워커에 위임
document.querySelector("#calculate-btn").addEventListener("click", () => {
  const data = { numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] };
  worker.postMessage(data);
});

// 워커로부터 결과 받기
worker.onmessage = function (e) {
  document.querySelector("#result").textContent = e.data.result;
};

// worker.js (별도 스레드)
self.onmessage = function (e) {
  const numbers = e.data.numbers;

  // 무거운 계산 수행
  const result = heavyCalculation(numbers);

  // 결과를 메인 스레드로 반환
  self.postMessage({ result });
};

function heavyCalculation(numbers) {
  // 시간이 많이 소요되는 계산...
  return numbers.reduce((sum, num) => sum + Math.pow(num, 2), 0);
}
```

</details>

<details style="color: #50a14f; margin: 4px; cursor: pointer;">
<summary><strong>예시 코드: 스로틀링 적용</strong></summary>

```javascript
// 기존 코드 (스크롤 이벤트마다 실행)
window.addEventListener("scroll", function () {
  updateElementsPosition();
});

// 최적화 코드 (스로틀링 적용)
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

window.addEventListener(
  "scroll",
  throttle(function () {
    updateElementsPosition();
  }, 100)
); // 100ms마다 최대 1번만 실행
```

</details>

### 2. 과도한 레이아웃 재계산

- **문제**: 잦은 스타일 변경으로 인한 레이아웃 재계산(reflow)
- **해결책**:
  - 스타일 변경을 일괄 처리(배치 처리)
  - DOM 요소 읽기와 쓰기 작업 분리
  - CSS 애니메이션에 `transform`과 `opacity` 속성 활용

<details style="color: #50a14f; margin: 4px; cursor: pointer;">
<summary><strong>예시 코드: DOM 조작 최적화</strong></summary>

```javascript
// 비효율적인 방식 (각 변경 후 레이아웃 재계산 발생)
function updateBoxes(items) {
  const container = document.getElementById("container");

  for (let i = 0; i < items.length; i++) {
    const div = document.createElement("div");
    div.className = "box";
    div.textContent = items[i].name;
    container.appendChild(div); // 매번 DOM이 업데이트됨

    // 이 시점에서 레이아웃 재계산이 발생할 수 있음
    console.log(div.offsetHeight); // 레이아웃 강제 발생
  }
}

// 최적화 방식 (DocumentFragment 사용)
function updateBoxesOptimized(items) {
  const fragment = document.createDocumentFragment();
  const measurements = [];

  for (let i = 0; i < items.length; i++) {
    const div = document.createElement("div");
    div.className = "box";
    div.textContent = items[i].name;
    fragment.appendChild(div);
  }

  // 한 번에 DOM에 추가
  document.getElementById("container").appendChild(fragment);

  // 읽기 작업은 쓰기 작업 이후에 모아서 처리
  const boxes = document.querySelectorAll(".box");
  for (let i = 0; i < boxes.length; i++) {
    measurements.push(boxes[i].offsetHeight);
  }
}
```

</details>

<details style="color: #50a14f; margin: 4px; cursor: pointer;">
<summary><strong>예시 코드: CSS 애니메이션 최적화</strong></summary>

```css
/* 비효율적인 방식 (레이아웃 재계산을 유발) */
.box-inefficient {
  animation: move-inefficient 1s ease infinite;
}

@keyframes move-inefficient {
  0% {
    left: 0;
    top: 0;
  }
  50% {
    left: 100px;
    top: 100px;
  }
  100% {
    left: 0;
    top: 0;
  }
}

/* 최적화 방식 (GPU 가속 활용) */
.box-optimized {
  animation: move-optimized 1s ease infinite;
}

@keyframes move-optimized {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(100px, 100px);
  }
  100% {
    transform: translate(0, 0);
  }
}
```

</details>

### 3. 대용량 이미지 및 미디어

- **문제**: 최적화되지 않은 이미지로 인한 느린 로드 시간
- **해결책**:
  - 이미지 압축 및 적절한 포맷 사용(WebP, AVIF)
  - 적절한 크기의 이미지 제공(`srcset`, `sizes`)
  - 레이지 로딩(Lazy Loading) 적용

<details style="color: #50a14f; margin: 4px; cursor: pointer;">
<summary><strong>예시 코드: 반응형 이미지 최적화</strong></summary>

```html
<!-- 기본적인 방식 (모든 기기에 동일한 대형 이미지 제공) -->
<img src="large-image.jpg" alt="풍경 이미지" />

<!-- 최적화 방식 (반응형 이미지) -->
<img
  src="small-image.jpg"
  srcset="small-image.jpg 400w, medium-image.jpg 800w, large-image.jpg 1200w"
  sizes="(max-width: 600px) 400px,
         (max-width: 1000px) 800px,
         1200px"
  alt="풍경 이미지"
/>
```

</details>

<details style="color: #50a14f; margin: 4px; cursor: pointer;">
<summary><strong>예시 코드: 이미지 포맷 최적화</strong></summary>

```html
<!-- 최신 이미지 포맷 지원 -->
<picture>
  <!-- AVIF 포맷 지원 브라우저용 -->
  <source srcset="image.avif" type="image/avif" />
  <!-- WebP 포맷 지원 브라우저용 -->
  <source srcset="image.webp" type="image/webp" />
  <!-- 폴백 이미지 -->
  <img src="image.jpg" alt="풍경 이미지" />
</picture>
```

</details>

<details style="color: #50a14f; margin: 4px; cursor: pointer;">
<summary><strong>예시 코드: 이미지 레이지 로딩</strong></summary>

```html
<!-- 네이티브 레이지 로딩 -->
<img src="image.jpg" loading="lazy" alt="풍경 이미지" />

<!-- 인터섹션 옵저버를 이용한 레이지 로딩 -->
<img data-src="image.jpg" class="lazy" alt="풍경 이미지" />
```

```javascript
// 인터섹션 옵저버를 활용한 레이지 로딩 구현
document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll("img.lazy");

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyImages.forEach(function (image) {
      imageObserver.observe(image);
    });
  } else {
    // 폴백 - 인터섹션 옵저버를 지원하지 않는 브라우저용
    let lazyLoadThrottleTimeout;

    function lazyLoad() {
      if (lazyLoadThrottleTimeout) {
        clearTimeout(lazyLoadThrottleTimeout);
      }

      lazyLoadThrottleTimeout = setTimeout(function () {
        const scrollTop = window.pageYOffset;

        lazyImages.forEach(function (img) {
          if (img.offsetTop < window.innerHeight + scrollTop) {
            img.src = img.dataset.src;
            img.classList.remove("lazy");
          }
        });

        if (lazyImages.length == 0) {
          document.removeEventListener("scroll", lazyLoad);
          window.removeEventListener("resize", lazyLoad);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
  }
});
```

</details>

### 4. 렌더링 차단 리소스

- **문제**: CSS, JavaScript 파일이 페이지 렌더링을 차단
- **해결책**:
  - 중요 CSS를 인라인으로 포함
  - JavaScript에 `async` 또는 `defer` 속성 사용
  - 중요하지 않은 리소스 로딩 지연

<details style="color: #50a14f; margin: 4px; cursor: pointer;">
<summary><strong>예시 코드: 중요 CSS 인라인 처리</strong></summary>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>성능 최적화 페이지</title>

    <!-- 중요 CSS를 인라인으로 포함 -->
    <style>
      /* 첫 화면에 필요한 중요 스타일만 인라인으로 포함 */
      body {
        margin: 0;
        font-family: sans-serif;
        color: #333;
      }
      .header {
        background-color: #f8f8f8;
        padding: 20px;
      }
      .hero {
        height: 80vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    </style>

    <!-- 나머지 CSS는 비동기로 로드 -->
    <link
      rel="preload"
      href="styles.css"
      as="style"
      onload="this.onload=null;this.rel='stylesheet'"
    />
    <noscript><link rel="stylesheet" href="styles.css" /></noscript>
  </head>
  <body>
    <header class="header">...</header>
    <section class="hero">...</section>
  </body>
</html>
```

</details>

<details style="color: #50a14f; margin: 4px; cursor: pointer;">
<summary><strong>예시 코드: JavaScript 최적화 로딩</strong></summary>

```html
<!-- 기본 방식 (렌더링 차단) -->
<script src="app.js"></script>

<!-- async 속성 사용 (다운로드 완료 즉시 실행) -->
<script src="analytics.js" async></script>

<!-- defer 속성 사용 (DOM 로드 후 순서대로 실행) -->
<script src="app.js" defer></script>
```

</details>

<details style="color: #50a14f; margin: 4px; cursor: pointer;">
<summary><strong>예시 코드: 리소스 우선순위 지정</strong></summary>

```html
<!-- 주요 리소스 미리 로드 -->
<link
  rel="preload"
  href="critical-font.woff2"
  as="font"
  type="font/woff2"
  crossorigin
/>
<link rel="preload" href="hero-image.jpg" as="image" />

<!-- 향후 필요한 리소스 미리 연결 설정 -->
<link rel="preconnect" href="https://api.example.com" />
<link rel="dns-prefetch" href="https://cdn.example.com" />

<!-- 사용자 상호작용 후 필요한 페이지 미리 로드 -->
<link rel="prefetch" href="next-page.html" />
```

</details>

### 5. Font 최적화

- **문제**: 웹 폰트 로딩 지연으로 인한 FOIT(Flash of Invisible Text) 또는 FOUT(Flash of Unstyled Text)
- **해결책**:
  - `font-display` 속성 활용
  - 폰트 서브셋팅
  - 폰트 프리로딩

<details style="color: #50a14f; margin: 4px; cursor: pointer;">
<summary><strong>예시 코드: 폰트 최적화</strong></summary>

---

```css
/* font-display 속성 활용 */
@font-face {
  font-family: "MyCustomFont";
  src: url("my-font.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
  /* swap: 폰트 로딩 중 시스템 폰트 먼저 표시 후 교체 */
  font-display: swap;
}

/* 필수 아이콘 폰트만 선택적으로 로드 */
@font-face {
  font-family: "IconFont";
  src: url("icon-font-subset.woff2") format("woff2");
  unicode-range: U+E000-E005; /* 필요한 아이콘만 포함하는 유니코드 범위 */
  font-display: block;
}
```

```html
<!-- 중요 폰트 미리 로드 -->
<link
  rel="preload"
  href="my-font.woff2"
  as="font"
  type="font/woff2"
  crossorigin
/>
```

</details>

## 결론

크롬 개발자 도구의 Performance 탭은 웹 성능 최적화를 위한 강력한 도구입니다. LCP, CLS, INP와 같은 핵심 성능 지표를 이해하고, 각 분석 뷰를 활용하여 성능 병목 지점을 정확히 파악할 수 있습니다.
제공한 예시 코드들은 실제 프로젝트에서 바로 활용할 수 있는 최적화 기법들입니다. 코드 분할부터 레이아웃 최적화, 이미지 및 폰트 최적화까지 다양한 기법을 적용하여 웹사이트의 성능을 크게 향상시킬 수 있습니다.

소개한 방법론과 팁을 활용하여 여러분의 웹 애플리케이션을 더 빠르고 반응성 있게 만들어보세용.
