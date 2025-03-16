<h2>Example</h2>
<li><strong>OCR 결과 파싱 및 시각화</strong></li>

<div style="display: flex; justify-content: center; height: 400px">
<img src="https://velog.velcdn.com/images/flip_404/post/507aa39f-6030-4bf1-9f7b-77dfac121283/image.png" style=" object-fit:contain;">
</div>
<div style="display: flex; justify-content: center; align-items:start; gap: 20px; margin-top:30px">
<img src="https://velog.velcdn.com/images/flip_404/post/b36b5e6e-8241-4fec-b41f-34a149b3ec69/image.png" style=" object-fit:contain; width: 700px">
<img src="https://velog.velcdn.com/images/flip_404/post/0d1e01a0-3e88-42f0-b0e9-f3ebdba963fc/image.png" style=" object-fit:contain; width: 700px">
</div>
<div style="display: flex; justify-content: center; align-items:start; gap: 20px; margin-top:30px;">
<img src="https://velog.velcdn.com/images/flip_404/post/2d3b9009-5155-4b92-999a-b1b3f5d3d02c/image.png" style=" object-fit:contain; width: 700px">
<img src="https://velog.velcdn.com/images/flip_404/post/fe6788b4-31f2-4a5d-ade8-8f17129789f6/image.png" style=" object-fit:contain; width: 700px">
</div>

<h2 style="margin-top: 50px;">What I did.</h2>

- 대량의 바운딩 박스를 메인 스레드 블로킹 없이 처리하기 위해 Web Worker와 OffscreenCanvas API를 활용해 개발했습니다.

<small>\* 예시 코드입니다.</small>

```javascript
// 메인 스레드
const canvasRef = useRef < HTMLCanvasElement > null;
const workerRef = (useRef < Worker) | (null > null);

useEffect(() => {
  if (!canvasRef.current) return;

  // OffscreenCanvas 생성 및 Worker로 전송
  const offscreen = canvasRef.current.transferControlToOffscreen();
  workerRef.current = new Worker("/bboxRenderer.worker.js");

  workerRef.current.postMessage(
    {
      type: "INIT",
      canvas: offscreen,
      data: parsedOCRData,
      dimensions: {
        originWidth: originImgSize.width,
        originHeight: originImgSize.height,
        containerWidth,
        containerHeight,
      },
    },
    [offscreen]
  );

  return () => workerRef.current?.terminate();
}, [parsedOCRData, containerWidth, containerHeight]);
```

<li><strong>Worker 내 바운딩 박스 렌더링 로직</strong></li>

```javascript
// bboxRenderer.worker.js
let canvas: OffscreenCanvas;
let ctx: OffscreenCanvasRenderingContext2D;
let bboxData: TextBBoxInfo[];
let sizeDiff: {widthDifference: number, heightDifference: number};
let selectedBBox: number | null = null;

self.onmessage = (e) => {
const { type, canvas: receivedCanvas, data, dimensions, selectedIndex } = e.data;

    if (type === 'INIT') {
        canvas = receivedCanvas;
        ctx = canvas.getContext('2d')!;
        bboxData = data.textBBoxInfo;

        // 크기 비율 계산
        sizeDiff = calculateSizeDifference(
            dimensions.originWidth,
            dimensions.originHeight,
            dimensions.containerWidth,
            dimensions.containerHeight
        );

        renderBoundingBoxes();
    } else if (type === 'UPDATE_SELECTION') {
        selectedBBox = selectedIndex;
        renderBoundingBoxes();
    }

};

function renderBoundingBoxes() {
ctx.clearRect(0, 0, canvas.width, canvas.height);

    bboxData.forEach(box => {
        const x = box.x1 * sizeDiff.widthDifference;
        const y = box.y1 * sizeDiff.heightDifference;
        const width = Math.abs(box.x2 - box.x1) * sizeDiff.widthDifference;
        const height = Math.abs(box.y2 - box.y1) * sizeDiff.heightDifference;

        ctx.strokeStyle = '#A065F3';
        ctx.lineWidth = 2;

        // 선택된 박스 배경 처리
        if (box.bboxIndex === selectedBBox) {
            ctx.fillStyle = 'rgba(160, 101, 243, 0.2)';
            ctx.fillRect(x, y, width, height);
        }

        ctx.strokeRect(x, y, width, height);
    });

}

```

- 초기에는 OffscreenCanvas에 그려진 바운딩 박스와 사용자 클릭 이벤트 좌표가 일치하지 않아 정확한 선택이 불가능했습니다. 이를 해결하기 위해 이벤트 좌표 매핑 시스템 구현했습니다.

<small>\* 예시 코드입니다.</small>

```javascript
// 메인 스레드에 투명 오버레이 캔버스 추가
const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // 클릭 위치에 있는 바운딩 박스 찾기
  const clickedBox = findBoxAtPosition(
    x,
    y,
    parsedOCRData.textBBoxInfo,
    sizeDifference
  );

  if (clickedBox) {
    setSelectedBBox(clickedBox.bboxIndex);
    workerRef.current?.postMessage({
      type: "UPDATE_SELECTION",
      selectedIndex: clickedBox.bboxIndex,
    });
  }
};

// 클릭 위치의 바운딩 박스 찾기
const findBoxAtPosition = (
  x: number,
  y: number,
  boxes: TextBBoxInfo[],
  sizeDiff: any
) => {
  return boxes.find((box) => {
    const boxX = box.x1 * sizeDiff.widthDifference;
    const boxY = box.y1 * sizeDiff.heightDifference;
    const boxW = Math.abs(box.x2 - box.x1) * sizeDiff.widthDifference;
    const boxH = Math.abs(box.y2 - box.y1) * sizeDiff.heightDifference;

    return x >= boxX && x <= boxX + boxW && y >= boxY && y <= boxY + boxH;
  });
};
```
