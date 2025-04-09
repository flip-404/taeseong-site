---
title: "React 렌더링 과정"
description: ""
tags: ["React.js"]
date: "2023-01-03"
---

## 1. 브라우저 렌더링 원리

브라우저 렌더링 원리라 하면 일반적으로 우리가 알고 있는 대답은 `Critical Rendering Path` 다.

**Critical Rendering Path**

Critical Rendering Path는 브라우저가 HTML, CSS, Javascript 를 해석해 화면에 렌더링하는 과정이다.

![image.png](https://velog.velcdn.com/images/flip_404/post/264f1c3d-d1ad-4cf7-ad0a-c98921ad755a/image.png)

1. HTML과 CSS 코드를 파싱해 DOM과 CSSOM으로 변환한다.
2. DOM과 CSSOM을 합쳐 Render Tree를 생성한다.
3. Render Tree를 기반으로 Layout을 계산한다.
4. 실제로 요소를 화면에 그린다(Painting).

**여기서 업데이트는 어떻게 진행될까?**

업데이트가 발생하면 업데이트에 따라(DOM이 변경되었는지, 스타일만 변경되었는지, transform이나 opacity가 변경되었는지 등)에 따라 레이아웃 재계산과 페인팅이 다시 발생한다. 이 때, Layout(Reflow)과 Painting(Repaint)는 연산이 많이 들어가는 과정이라는 점을 유의해야 한다.

예를 들어, ul 태그에 li 요소 3000개를 추가해야 하는 상황에서

- 방법1: 반복문을 돌며 3000번의 li 요소 생성 및 추가
- 방법2: 반복문으로 생성한 3000개의 li 요소를 한 번에 추가

방법1은 DOM 추가가 3000번 일어나는 데 반해 방법2는 DOM 추가가 1번만 일어난다는 점에서 성능적으로 훨씬 뛰어나다.

이처럼 브라우저 최적화에는 DOM의 수정 횟수를 최소화 하는 것이 중요하다.

하지만 다행히 **React는 내부적 동작을 통해 동시에 발생한 업데이트를 다 모아서 최소한의 업데이트를 진행**한다.

## 2. React 렌더링 원리

리액트는 2단계를 거쳐 화면에 UI를 렌더링한다.

- Render Phase
- Commit Phase

![image.png](https://velog.velcdn.com/images/flip_404/post/b97bfda1-6aa8-4544-b706-8c5ee748eb05/image.png)

### Render Phase

결론부터 말하면 Render Phase에서는 DOM 변경을 위한 **변경 사항을 계산**한다. DOM 변경이 수행되지는 않는다!

Render Phase에서는 먼저 **컴포넌트를 호출해 결과값을 계산**한다.

우리가 React에서 아래와 같은 컴포넌트 함수를 호출했을 때, 결과값이 HTML 일 것 같지만 사실은 React Element라는 객체를 반환한다.

그리고 이 React Element라는 객체는 렌더링하고자 하는 컴포넌트의 모든 정보를 담고 있다.

![image.png](https://velog.velcdn.com/images/flip_404/post/0298252e-b1de-4367-9d02-4fdd225fe920/image.png)

그 후에는, 방금 **함수를 호출해서 얻은 React Element들을 모아 Virtual DOM을 생성**한다.

**Virtual DOM**

Virtual DOM은 실제 DOM이 아닌 React Element라고 부르는 객체 값들의 모임이다.

객체 값들의 모임이기 때문에 수정이 자유롭고 형태를 만들고 부수는 것도 연산을 많이 소요하지 않는다.

즉, 다시 말해 React는 **Render Phase에서 컴포넌트를 호출해 React Element를 반환받고, 그 React Element로 Virtual DOM을 생성**한다.

![image.png](https://velog.velcdn.com/images/flip_404/post/dc0f849a-c920-44d8-8407-e75f8ceec9f3/image.png)

### Commit Phase

Commit Phase는 Virtual DOM을 Real DOM에 반영하는 단계를 수행한다.

![image.png](https://velog.velcdn.com/images/flip_404/post/da00bd0e-1053-4b25-92c4-abf601362339/image.png)

이 때 setState가 실행되어 상태가 업데이트 된다면 어떨까?

### Reconciliation(setState 가 실행된다면?)

React에서는 상태가 변경되면 setState가 호출되고 이를 반영한 새로운 Fiber Node를 생성한다.

**FiberNode**

React는 각 컴포넌트의 상태 정보를 담고 있는 `Fiber ****Node`라는 것을 만든다.

(React Element를 반환받아 그 정보를 기반으로 Fiber Node를 생성하고 그 Fiber Node가 모여 Virtual DOM이 된다)

그 후 **기존의 Fiber Tree와 새로운 Fiber Tree를 비교해 최소한의 변경만 반영**한다. 이를 Reconciliation이라고 한다.

이 때 리액트가 바닐라 자바스크립트 보다 빠르게 화면 업데이트를 할 수 있는 이유는 setState 호출에 의해 생성된 Fiber Node를 쌓아둑고, 이들을 한 번의 트리 업데이트로 처리하기 때문이다.

즉, React는 발생한 업데이트를 모아 한 번만 DOM을 수정하기 때문에 대부분의 상황에서 빠른 속도로 화면 업데이트가 이루어진다. 하지만, Virtual DOM을 생성하고 비교하는 과정은 결국 연산이 소요되는 과정이기 때문에 모든 순간에 빠른 속도를 보장하진 않을 수 있다. (Svelte는 Virtual DOM을 사용하지 않는 것으로 알려져 있다.)

## 3. React 최적화

그렇다면 React 렌더링을 어떻게 하면 더 최적화할 수 있을까?

사용할 수 있는 방법으로는 **메모이제이션(React.memo)**이 았다.

**예시 상황) Likes 컴포넌트를 React.memo로 메모이제이션하기**

기존에 setState를 사용하면 React는 기존의 initial Fiber Node의 value와 새로운 Fiber Node의 value가 다르기 때문에 리렌더링을 일으킨다.

Likes 컴포넌트가 count값이 변할 때만 리렌더링 하고싶어 React.memo로 감싸보았다.

![image.png](https://velog.velcdn.com/images/flip_404/post/de1aaa9a-a212-4b4c-9ba6-ef7824d90b88/image.png)

Likes 컴포넌트는 메모이제이션 되었기 때문에 상위 컴포넌트인 Profile 컴포넌트의 업데이트와 관련 없이 이전의 렌더링 결과를 재사용할 수 있길 기대하게 된다.

하지만 위 상황에서 메모이제이션은 아무 소용이 없다.

Likes 컴포넌트가 props로 사용하고 있는 who와 handleClick이 Profile 컴포넌트가 실행될 때마다 새로 생성되기 때문에 계속 다른 값이라고 판단하게 되는 것이다. 이를 해결하기 위해 `useMemo` 와 `useCallback` 을 사용하여 값의 참조를 동일하게 유지할 수 있다. 따라서 Likes 컴포넌트는 이전 렌더링 값을 사용할 수 있다.

**코드 예시**

```jsx
const App = () => {
  const [state, setState] = useState(1);

  return (
    <div>
      <button onClick={() => setState(state + 1)}>{state}</button>
      <Page />
    </div>
  );
};

const Page = () => <Item />;
```

Page는 아무 변화도 없는데 App 이 렌더링 될 떄마다 계속 재렌더링 되는 상황이다.

```jsx
const PageMemoized = React.memo(Page);

const App = () => {
  const [state, setState] = useState(1);
  const onClick = () => {
    console.log("Do something on click");
  };

  return (
    <div>
      <PageMemoized onClick={onClick} />
    </div>
  );
};
```

그래서 Page 컴포넌트를 React.memo로 감싸보았다.

하지만 App 컴포넌트가 리렌더링 될 때마다 onClick 함수가 새로 생겨 React는 PageMemoized 컴포넌트의 props가 변경되었다고 판단한다.

따라서 React.memo의 소용없이 같이 리렌더링 되는 상황

```jsx
const PageMemoized = React.memo(Page);

const App = () => {
  const [state, setState] = useState(1);
  const onClick = useCallback(() => {
    console.log("Do something on click");
  }, []);

  return <PageMemoized onClick={onClick} />;
};
```

onClick 함수를 useCallback과 함께 사용함으로써 Page 컴포넌트는 memo되어 리렌더되지 않는다.

하지만, 무분별한 useCallback과 useMemo 사용 또한 연산을 수행하게 하므로 컴포넌트 최적화가 필요한 순간에 잘 사용하는 것이 중요하다.
