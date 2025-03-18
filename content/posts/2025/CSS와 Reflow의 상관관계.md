---
title: "CSS와 Reflow의 상관관계"
description: "CSS 옵션을 통해 렌더링 속도를 높일 수 있다는 것을 알고 계셨나요?"
tags: ["Reflow", "Css"]
date: "2025-01-20"
---

# 1. Reflow가 발생하는 이유

브라우저의 렌더링 엔진이 DOM 요소들의 **위치와 크기**를 계산하는 과정(레이아웃 단계)에 영향을 미치기 때문입니다. 각 속성은 요소의 **배치, 크기, 관계**에 변화를 일으켜 브라우저가 레이아웃을 다시 계산해야 하는 상황을 만듭니다.

Reflow의 단점은 레이아웃 이후의 렌더링 단계들도 모두 다시 수행되기 때문에 Reflow를 줄이는 것은 렌더링 성능에 영향을 미칩니다.

또한 레이아웃 재계산은 **메인 스레드에서 수행**되므로, 다른 작업과 동시에 실행되지 못합니다.

**Reflow를 발생시키는 경우는 다음과 같습니다.**

**위치 및 크기 속성 변경**

요소의 **크기와 위치**를 변경하므로, 요소 자신뿐만 아니라 주변 요소의 배치도 영향을 받게 됩니다.

- `width`, `height`, `margin`, `padding` 등은 요소의 크기나 공간을 직접적으로 변경하므로 레이아웃 재계산을 유발합니다.
- `position`, `top`, `left` 등의 속성은 요소의 **좌표**를 변경하므로 재배치가 필요합니다.
- `display`가 `none`에서 다른 값으로 바뀌면, 요소가 DOM에 다시 참여하게 되며, 해당 요소와 관련된 모든 레이아웃을 다시 계산해야 합니다.
- `margin`을 변경하면 해당 요소뿐만 아니라, **인접한 형제 요소의 배치**에도 영향을 미칩니다.
- `overflow` 속성은 스크롤 영역을 계산하기 위해 추가적인 레이아웃 계산이 필요합니다.

**글꼴 및 텍스트 관련 속성 변경**

텍스트와 관련된 속성은 글자의 **크기, 간격, 배치**에 영향을 미칩니다. 이는 텍스트가 포함된 요소의 크기와 배치를 다시 계산하게 만듭니다.

- 글꼴 크기(`font-size`)가 변경되면 텍스트가 차지하는 공간이 달라져 요소의 크기를 변경합니다.
- `line-height`는 텍스트 줄 간의 간격을 조정하므로, 요소의 높이가 달라질 수 있습니다.
- `letter-spacing`, `word-spacing`은 텍스트의 너비를 변경해 레이아웃 계산에 영향을 줍니다.
- `white-space`는 텍스트가 줄 바꿈 처리되는 방식을 바꿔, 텍스트 배치와 요소의 크기를 재조정하게 만듭니다.

**DOM 변경**

DOM 트리 변경은 요소의 **구조적 변경**을 야기하므로, 브라우저는 레이아웃을 다시 계산해야 합니다.

- DOM에 새로운 요소가 추가되거나 기존 요소가 삭제되면, 요소들의 배치와 크기를 다시 계산해야 합니다.
- 부모 요소에 자식이 추가되거나 제거되면 부모 요소의 크기와 레이아웃이 바뀌고, 이는 부모와 관련된 다른 요소들에게도 영향을 미칩니다.
- 텍스트 콘텐츠 변경(`textContent`, `innerHTML`)은 텍스트의 크기나 줄 바꿈 등을 변경시켜 레이아웃을 다시 계산하게 만듭니다.
- 속성 변경(`className`, `id`, `style`)은 요소의 스타일이나 배치 속성을 변경할 수 있으므로 레이아웃 재계산을 유발합니다.

**특정 JavaScript 속성 접근**

JavaScript에서 일부 속성을 읽으려고 하면 브라우저는 최신 레이아웃 정보를 제공하기 위해 레이아웃을 강제로 계산합니다.

대표적인 속성:

- `offsetWidth`, `offsetHeight`
- `clientWidth`, `clientHeight`
- `getBoundingClientRect()`
- `scrollWidth`, `scrollHeight`

```jsx
const width = element.offsetWidth; // 레이아웃 강제 재계산
```

# 2. **Graphics Layer 이해하기**

먼저 다음 그림으로 같이 브라우저 렌더링 과정을 살펴봅시다.

![렌더링 과정](https://velog.velcdn.com/images/flip_404/post/b0289728-478e-4ac1-960b-de39faa84b61/image.png)

그림에선 나오지 않지만, Composite 단계 이전에 Layout과 Paint 단계를 거치면 Layer Tree가 형성되고 **Paint Layer**와 **Graphics Layer** 이 두 가지로 나뉘게 됩니다.

Paint Layer는 HTML 요소를 기반으로 생성된 레이어로, 요소들이 화면에 어떻게 보일지에 대한 페인팅 정보를 관리합니다.

Graphics Layer는 Paint Layer를 GPU에서 렌더링하기 위해 **합성(Compositing)** 단계에서 생성된 레이어입니다.

|                  | **Paint Layer**          | **Graphics Layer**                            |
| ---------------- | ------------------------ | --------------------------------------------- |
| **생성 주체**    | HTML 요소와 스타일 정보  | GPU에서 합성을 위해 Paint Layer 기반으로 생성 |
| **역할**         | 요소를 픽셀로 페인팅     | Paint Layer를 GPU에서 합성 및 렌더링 처리     |
| **연관 속성**    | `z-index`, `position` 등 | `transform`, `opacity`, `will-change` 등      |
| **주 사용 영역** | CPU에서의 렌더링         | GPU 가속을 활용한 합성                        |

**Graphics Layer**는 Paint Layer(Render Layer)에서 한 단계 더 나아가, 화면에 출력될 요소들의 처리를 GPU가 담당하도록 하기 위해 생성되는 레이어입니다. **GPU에게는 하나의 렌더링 단위**로 작용하며, 이를 통해 렌더링 성능을 최적화합니다.

**Graphics Layer**는 GPU의 강력한 병렬 처리 능력을 활용하기 위해 생성되며, CPU가 해야 할 일부 작업을 GPU로 위임함으로써 **렌더링 성능을 대폭 향상**시킵니다. GPU가 Graphics Layer를 묶어 처리하는 과정을 **하드웨어 가속** 또는 **GPU 가속**이라고 합니다.

**Graphics Layer의 특징**

- **GPU가 처리**: Graphics Layer에 위치한 요소는 **CPU가 아닌 GPU**가 처리합니다.
- **하드웨어 가속(GPU 가속)**: CPU가 처리할 작업을 GPU에 위임하여, Graphics Layer를 묶어 하나의 이미지(텍스처)로 생성합니다.
  - **텍스처**: GPU에 전달되는 비트맵 이미지 형식.

**Graphics Layer가 생성되는 경우**

Graphics Layer는 다음과 같은 조건에서 생성됩니다.

(아래 외에도 추가적인 조건이 존재할 수 있습니다.)

1. **`<video>`나 `<canvas>` 태그**를 사용하는 경우.
2. **하드웨어 가속 플러그인**을 사용하는 경우.
3. **3D 변환** 속성(`transform: perspective`, `rotate3d` 등)이 있는 경우.
4. **하드웨어 가속된 2D canvas** 요소인 경우.
5. *`backface-visibility` 속성이 `hidden`*인 경우.
6. **`transition`, `animation`** 속성이 있는 경우.
7. **`will-change`** 속성이 설정된 경우(`opacity`, `transform`, `top`, `left` 등).

**Graphics Layer의 GPU 처리 방식**

1. CPU는 Graphics Layer를 **텍스처 형식**으로 변환합니다.
   - 텍스처는 GPU에 전달될 **비트맵 이미지**를 의미합니다.
2. GPU는 이 텍스처를 받아 화면에 빠르게 렌더링합니다.

# 3. transform 속성으로 레이아웃 & 페인팅 단계 피하기

![예시 이미지](https://velog.velcdn.com/images/flip_404/post/089f4948-d435-4663-bf51-c5640c99ee41/image.png)

브라우저에서 위 그림과 같이 사람 모양의 그림이 이동하는 것을 구현하고 싶을 때 배경까지 프레임 단위로 다시 그리면 굉장히 비효율적일 것 입니다.

Graphics Layer를 활용하면 여기서 사람 모양의 그림만 분리해서 출력하고 **변경된 위치만 계산**하면 됩니다.

이는 GPU에서 작업이 이뤄져 CPU와 그래픽 작업을 분리할 수 있어 CPU의 부담을 덜어줄 수 있습니다.

**transform의 동작 방식**

- `transform`은 새로운 픽셀 데이터를 그리지 않습니다. 대신, 기존 레이어를 GPU가 처리하므로 추가적인 페인팅 작업이 필요하지 않습니다.
- `transform`은 요소의 렌더링된 결과(합성 단계)를 변경합니다.즉, **레이아웃 단계 없이** 요소의 시각적 표현만 변경되며, 레이아웃 계산에 영향을 미치지 않습니다.
- 요소가 이동하거나 크기가 변경되어도 다른 요소의 배치에는 영향을 주지 않습니다.
- 이는 **레벨 3 합성(compositing)** 단계에서 기존 레이아웃 정보를 그대로 사용하면서 GPU 가속을 통해 요소를 이동하거나 회전시킵니다.

# 4. 그 외의 Reflow를 줄이는 방법

### (1) **스타일 변경 최소화**

- 여러 스타일을 한 번에 변경:

```jsx
element.style.width = "100px";
element.style.height = "50px";

// 효율적
element.style.cssText = "width: 100px; height: 50px;";
```

### (2) **클래스 활용**

- 개별 스타일 변경 대신 CSS 클래스를 추가/제거:

```jsx
element.classList.add("new-class");
```

### (3) **DOM 변경 작업 병합**

- DOM 업데이트를 한 번에 처리:

```jsx
// 비효율적
const parent = document.querySelector("#parent");
parent.appendChild(child1);
parent.appendChild(child2);

// 효율적
const fragment = document.createDocumentFragment();
fragment.appendChild(child1);
fragment.appendChild(child2);
parent.appendChild(fragment);
```

### (4) **레이아웃 속성 접근 줄이기**

- 레이아웃 관련 속성을 읽은 뒤 바로 쓰는 작업을 반복하지 않도록 주의:

```jsx
// 비효율적
element.style.width = element.offsetWidth + "10px";

****// 효율적
const width = element.offsetWidth;
element.style.width = width + "10px";
```

### (5) **애니메이션 최적화**

- 레이아웃을 변경하지 않는 속성(`transform`, `opacity`)을 사용하여 GPU 가속을 활용:

```css
.element {
  transform: translateX(100px); /* 레이아웃 변경 없이 애니메이션 가능 */
}
```
