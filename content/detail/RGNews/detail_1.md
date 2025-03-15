<h2>Example</h2>

<div style="display: flex; justify-content: space-between; height: 500px">
<img src="https://velog.velcdn.com/images/flip_404/post/bec2048f-8cc8-44db-8cea-46ee0011ff7c/image.gif" style=" object-fit:contain;">
<img src="https://velog.velcdn.com/images/flip_404/post/16a4b64d-47dd-4f4b-9466-92adae8b1f9c/image.png" style=" object-fit:contain;">
<img src="https://velog.velcdn.com/images/flip_404/post/1c2ebdab-2181-4747-8963-f5031015cb06/image.png" style=" object-fit:contain;">
</div>

<h2>What I did.</h2>
<li><strong>스와이프 전환 애니메이션 개선</strong></li>

초기에는 스와이프 전환 시 부자연스러운 화면 전환이 발생했습니다. 이를 해결하기 위해 Swiper의 `onSetTranslate` 이벤트를 활용하여 스와이프 방향과 거리에 따라 동적으로 opacity를 조절하는 로직을 구현했습니다. 드래그 방향에 따라 다른 opacity 계산 로직을 적용하여 자연스러운 전환 효과를 구현했습니다.

<small>\* 예시 코드입니다.</small>

```javascript
<Swiper
  direction={"vertical"}
  className="mySwiper"
  onSlideChange={handleSlideChange}
  onTransitionEnd={() => {
    setOpacity(1);
  }}
  onSetTranslate={(swiper, translate) => {
    const opacity = (translate + swiper.height * curIndex) / -swiper.height;

    // 첫렌더시 1로 셋팅
    if (opacity === -0) {
      setOpacity(1);
      return;
    }

    // 드래그 방향에 따른 opacity 조절
    if (swiper.touches.diff < 0) {
      setOpacity(1 - opacity * 2);
    } else {
      setOpacity(-opacity);
    }

}}
```

<li style="margin-top:50px;"><strong>렌더링 최적화</strong></li>

모든 뉴스 아이템을 한꺼번에 렌더링하여 대량의 데이터를 로드할 때 발생하는 성능 저하 문제를 해결하기 위해 `isOutOfRange` 함수를 구현하여 현재 보고 있는 아이템 주변의 일정 범위(RENDER_RANGE = 15)만 렌더링하는 작업을 진행했습니다.

<small>\* 예시 코드입니다.</small>

```javascript
const isIndexWithinRange = (curIndex, targetIndex, range) => {
  const lowerBound = curIndex - range;
  const upperBound = curIndex + range;
  return lowerBound < targetIndex && upperBound > targetIndex;
};

const isOutOfRange = (curIndex, targetIndex, range) => {
  return curIndex > 21 && !isIndexWithinRange(curIndex, targetIndex, range);
};

// 조건부 렌더링
{
  shortsData.map((newsInfo, index) =>
    isOutOfRange(curIndex, index, RENDER_RANGE) ? (
      <SwiperSlide key={index} />
    ) : (
      <SwiperSlide key={index}>
        {({ isActive }) => (
          <News
            index={index}
            curIndex={curIndex}
            newsInfo={newsInfo}
            // 추가 props...
          />
        )}
      </SwiperSlide>
    )
  );
}
```
