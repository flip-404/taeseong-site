<h2>Example</h2>

<div style="display: flex; justify-content: center; gap: 40px; height: 500px">
<img src="https://velog.velcdn.com/images/flip_404/post/da76e87a-1549-4098-868d-e51eb20100cc/image.png" style=" object-fit:contain;">
<img src="https://velog.velcdn.com/images/flip_404/post/7134a51a-6054-4db1-9ea3-6c62c6daadfe/image.png" style=" object-fit:contain;">
</div>

<h2>What I did.</h2>
<li><strong>뉴스 조회 API 무한 스크롤 기능</strong></li>

뉴스 조회를 위한 API 연동과 Intersection Observer를 활용한 무한 스크롤 기능을 구현했습니다. 한 번에 수백 개의 뉴스를 모두 가져오는 대신, 10개씩 데이터를 페이징하여 불러오도록 하여 사용자 경험을 개선하고 성능을 최적화했습니다.

<small>\* 예시 코드입니다.</small>

```javascript
const { data, status, hasNextPage, fetchNextPage, isFetchingNextPage, error, refetch } =
  useInfiniteQuery(createQueryConfig(currentCategory), {
    staleTime: 5 * 60 * 1000,
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });

const handleObserver = useCallback(
  (entries) => {
    const [target] = entries;
    if (target.isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  },
  [fetchNextPage, hasNextPage]
);

useEffect(() => {
  const element = observerElem.current;
  const option = { threshold: 0 };

  if (element) {
    const observer = new IntersectionObserver(handleObserver, option);
    observer.observe(element);
    return () => observer.unobserve(element);
  }
}, [observerElem, handleObserver]);
```

<li style="margin-top:50px;"><strong>뉴스 컴포넌트 에러 처리 및 재시도 기능 구현</strong></li>

뉴스 컴포넌트가 새로운 뉴스 목록을 불러오는 과정에서 발생하는 런타임 에러를 감지하고, 사용자가 쉽게 재시도할 수 있도록 에러 바운더리를 구현하였습니다.

<small>\* 예시 코드입니다.</small>

```javascript
import React, { Component } from 'react';

// 에러 바운더리 컴포넌트
class NewsErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      retryCount: 0,
      isRetrying: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  handleReset = () => {
    this.setState({ hasError: false });
  };

  handleRetry = () => {
    this.setState({ isRetrying: true, retryCount: this.state.retryCount + 1 });
    setTimeout(() => {
      this.setState({ hasError: false, isRetrying: false });
      // ... (retry 로직 생략)
    }, 1000);
  };

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>뉴스 데이터를 불러오는 중 오류가 발생했습니다.</p>
          <button onClick={this.handleRetry}>다시 시도</button>
        </div>
      );
    }
    return this.props.children;
  }
}

// 에러 바운더리 적용
const NewestNews = (props) => (
  <NewsErrorBoundary>
    <NewestNewsInner {...props} />
  </NewsErrorBoundary>
);

export default NewestNews;
```
