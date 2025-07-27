<h2>Example</h2>

<div style="display: flex; justify-content: center; height: 500px">
<img src="https://velog.velcdn.com/images/flip_404/post/114db737-2bd4-4abb-b250-9f7baaf6817b/image.gif" style=" object-fit:contain;">
</div>

<h2 style="margin-top: 50px;">What I did.</h2>
<li><strong>인터랙티브 스크롤 애니메이션 개발</strong></li>

- TmaxAI 소개 페이지를 위한 인터랙티브 스크롤 애니메이션을 개발했습니다. 사용자의 스크롤 동작에 반응하여 세 개의 원형 요소가 자연스럽게 중앙에 모이는 시각적 효과를 구현했습니다.
- 스크롤 이벤트의 과도한 호출로 인한 성능 저하를 방지하기 위해 쓰로틀링(throttling) 기법을 적용했습니다.
- 100ms 간격으로 이벤트 처리를 제한하여 애니메이션의 부드러움을 유지하면서도 브라우저 성능에 부담을 주지 않도록 최적화했습니다.

<small>\* 예시 코드입니다.</small>

```javascript
useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  window.addEventListener('scroll', throttle(handleScroll, 100));

  return () => {
    window.removeEventListener('scroll', throttle(handleScroll, 100));
  };
}, []);
```

- 초기에는 원형 요소들이 겹쳐질 때 테두리와 내부 콘텐츠가 자연스럽게 통합되지 않는 문제가 있었습니다. 이를 해결하기 위해 CSS의 pseudo-elements와 mix-blend-mode 속성을 활용한 마스킹 기법을 도입했습니다.

<small>\* 예시 코드입니다.</small>

```css
&::before {
    position: absolute;
    top: 0;
    left: ${(props) => props.$circlePos!}px;
    // ... 추가 속성 ...
    background-color: #fff;
    mix-blend-mode: normal;
    transition: all 0.2s;
}

```
