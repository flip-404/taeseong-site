<h2>Example</h2>

<div style="display: flex; justify-content: space-between; height: 500px">
<img src="https://velog.velcdn.com/images/flip_404/post/968b0ee8-48ff-4776-9dff-86c854e6538f/image.png" style=" object-fit:contain;">
<img src="https://velog.velcdn.com/images/flip_404/post/0976a268-9825-437a-b8b4-b17063ad885d/image.png" style=" object-fit:contain;">
<img src="https://velog.velcdn.com/images/flip_404/post/51f28a85-3381-4701-aa45-ba96a71cb04f/image.png" style=" object-fit:contain;">
</div>

<h2>What I did.</h2>

- 검색창, 맞춤 검색어, 트렌딩 이슈, 연관 검색어, 검색 결과를 제공하는 종합 검색 페이지를 구현했습니다

- 검색 성능 최적화를 위해 커스텀 useDebounce 훅을 개발했습니다. 이 훅은 사용자 입력 후 일정 시간(150ms)이 지난 후에만 API 요청을 보내도록 하여 불필요한 서버 호출을 줄이고 애플리케이션의 성능을 향상시켰습니다.

<small>\* 예시 코드입니다.</small>

```javascript
import { useState, useEffect, useRef } from 'react';

const useDebounce = (value, delay = 150) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(timeoutRef.current);
  }, [value, delay]);

  return debouncedValue;
};

// 사용 예시
const isSearchEnd = question !== null;
const isSearching = searchContent !== '' && !isSearchEnd;
const beforeSearch = !isSearchEnd && !isSearching;
const debounceSearchContent = useDebounce(searchContent, 150);
```
