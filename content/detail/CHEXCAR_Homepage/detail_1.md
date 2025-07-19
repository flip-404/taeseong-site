<h2>개선 전후 비교 결과</h2>
<div style="margin-top:20px; display: flex; justify-content: space-between; height: 500px ">
<img src="https://velog.velcdn.com/images/flip_404/post/eb5fbd3d-6bdc-4317-ad9e-2ee358fb395f/image.png" style="width:45%; object-fit:contain;">
<img src="https://velog.velcdn.com/images/flip_404/post/9869d202-a144-466f-bfa4-a4fcfc8508b3/image.png" style="width:45%; object-fit:contain;">
</div>

<h2>What I did.</h2>
<li>각 페이지의 인터랙션 UI 성능을 React Profiler로 측정하고, 불필요한 리렌더링을 방지하기 위해 transform 속성 기반 GPU 가속을 적용했습니다</li>
<li>최적화를 통해 스크롤 이벤트 발생 시 반복되던 리렌더링 문제를 해결하여, 초기 렌더링 이후에는 추가적인 리렌더링이 발생하지 않도록 성능을 개선했습니다</li>

<h3>기존 코드</h3>

문제 1: 스크롤 값을 상태(State)로 관리함에 따라, 값이 변경될 때마다 불필요한 컴포넌트 리렌더링이 발생 <br/>
문제 2: scrollPadding 값에 따라 레이아웃(Reflow)을 유발하는 CSS 속성이 변경되어, 성능 저하를 초래하는 리플로우 발생

<small>\* 예시 코드입니다.</small>

```javascript
export default function VideoComponent() {
  const [scrollPadding, setScrollPadding] = useState(0);

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        if (scrollY <= 100) {
          const paddingPercentage = scrollY / 100;
          setScrollPadding(paddingPercentage);
        } else if (scrollY > 100) {
          setScrollPadding(1);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);
  return (
    <Container $scrollPadding={scrollPadding}>
      <VideoWrapper $scrollPadding={scrollPadding}>
        <Video autoPlay muted loop>
          <source src={PromotionVideo} type="video/mp4" />
        </Video>
      </VideoWrapper>
    </Container>
  );
}
```

<h3>개선 코드</h3>

개선 1: 스크롤 값을 상태(State) 대신 Ref를 통해 직접 참조하여, 값 변경 시 발생하던 불필요한 리렌더링 방지 <br/>
개선 2: 레이아웃 변경(Reflow)을 유발하는 CSS 속성 대신 transform 속성을 사용하여 스타일을 구현

<small>\* 예시 코드입니다.</small>

```javascript
// React 상태를 사용하지 않고, 스크롤 값을 CSS 변수를 직접 설정하여 해당 변수로 transform 스타일을 제어
export default function VideoComponent() {
  const containerRef = useRef(null);
  const videoContainerRef = useRef(null);
  const scaleWrapperRef = useRef(null);

  useEffect(() => {
    let rafId;
    const container = containerRef.current;
    const videoContainer = videoContainerRef.current;
    const scaleWrapper = scaleWrapperRef.current;

    if (!container || !videoContainer || !scaleWrapper) return;

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        // 0에서 1 사이의 값으로 정규화
        const progress = Math.min(1, scrollY / 100);

        // 반올림하여 미세한 변화 무시 (성능 최적화)
        const roundedProgress = Math.round(progress * 100) / 100;

        // React 상태를 사용하지 않고, CSS 변수를 직접 설정하여 해당 변수로 transform 스타일을 제어
        container.style.setProperty('--scroll-progress', roundedProgress);
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <Container ref={containerRef}>
      <VideoWrapper>
        <Video autoPlay muted loop>
          <source src={PromotionVideo} type="video/mp4" />
        </Video>
      </VideoWrapper>
    </Container>
  );
}
```
