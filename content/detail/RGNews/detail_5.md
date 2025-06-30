<h2>What I did.</h2>
<h3>useTTS 커스텀 훅</h3>

- useTTS 커스텀 훅을 개발하여 오디오 재생과 관련된 모든 상태와 기능을 효율적으로 관리했습니다. 오디오의 재생/정지 상태를 추적하고, 재생 시간과 전체 길이를 기반으로 진행률을 실시간으로 계산하는 로직을 구현했습니다.
- 사용자 경험 향상을 위해 오디오 재생, 정지뿐만 아니라 특정 시점으로 점프하는 기능도 추가했습니다.
- requestAnimationFrame API를 활용하여 오디오 진행 상태를 매끄럽게 업데이트함으로써 부드러운 사용자 경험을 제공하는 데 주력했습니다.

<small>\* 예시 코드입니다.</small>

```javascript
const useTTS = ({ autoSkip = false, skipFn } = {}) => {
  const [isPlayTts, setIsPlayTts] = useState(false);
  const [proceedTime, setProceedTime] = useState(0);
  const ft32DataRef = useRef(null);
  const audioSourceRef = useRef(null);
  const audioDuration = useRef(null);
  const proceedTimeStampRef = useRef(0);
  // ... 기타 상태 관리 변수들

  // 오디오 진행률 계산
  const audioProceedPercent = getProceedTimePercent(proceedTime, audioDuration.current);

  // TTS 오디오 데이터 재생 함수
  const playTtsAudioData = () => {
    if (!isPlayTts) setIsPlayTts(true);
    if (!ft32DataRef.current) return;

    try {
      // 오디오 데이터를 오디오 소스로 변환
      const audioSource = ft32DataToAudio(ft32DataRef.current);
      audioSourceRef.current = audioSource;
      audioSourceRef.current.onended = handleAudioStop;
    } catch (e) {
      throw e;
    }

    // ... 오디오 재생 로직

    // 현재 진행 시간부터 오디오 재생 시작
    audioSourceRef.current.start(0, proceedTimeStampRef.current);
    audioProgressStart();
  };

  const handleAudioStop = (e) => {
    // ... 오디오 중지 핸들링
    stopTtsAudio();
  };

  // ... 기타 오디오 제어 메서드

  // 오디오 진행 상태 애니메이션 함수

  const audioProgressAnimation = (timeStamp) => {
    if (prevTimeStamp.current)
      proceedTimeStampRef.current =
        proceedTimeStampRef.current + (timeStamp - prevTimeStamp.current) / 1000;
    setProceedTime(proceedTimeStampRef.current);
    prevTimeStamp.current = timeStamp;
    // requestAnimationFrame을 사용한 실시간 진행 시간 업데이트
    progressAnimationFrameRef.current = requestAnimationFrame(audioProgressAnimation);
  };

  // TTS 상태 초기화 함수
  // 모든 상태 및 오디오 리소스 정리
  const resetTtsStates = () => {
    setProceedTime(0);
    audioSourceRef.current?.stop();
    proceedTimeStampRef.current = 0;
    audioDuration.current = null;
    setIsPlayTts(false);
  };

  return {
    isPlayTts,
    proceedTimeStampRef,
    audioProceedPercent,
    setIsPlayTts,
    playTtsAudioData,
    resetTtsStates,
    // ... 기타 반환 값
  };
};

export default useTTS;
```

<h3 style="margin-top:50px;">useTTSQueries 커스텀 훅</h3>

- useTTSQueries 커스텀 훅을 통해 TTS API 호출을 최적화했습니다. React Query를 활용하여 API 상태 관리를 구현했으며, 대용량 텍스트 처리 속도를 높이기 위해 텍스트를 여러 블록으로 나누어 병렬로 API 요청을 처리하는 방식을 적용했습니다.
- 네트워크 리소스를 효율적으로 사용하기 위해 AbortController를 도입하여 사용자가 페이지를 떠나거나 콘텐츠를 전환할 때 불필요한 API 요청을 취소할 수 있도록 했습니다.

<small>\* 예시 코드입니다.</small>

```javascript
const useTTSQueries = (content, resetTtsStates) => {
  // 텍스트를 API 호출에 포맷으로 변환
  const ttsPostTexts = makeTTSPostText(content);
  // API 요청 취소를 위한 AbortController 참조 배열
  const controllerRefs = useRef(new Array(ttsPostTexts.length).map(() => new AbortController()));

  const result = useQueries(
    ttsQueries(ttsPostTexts, controllerRefs, resetTtsStates) // React Query 설정 함수
  );

  const isError = result.some(({ isError }) => isError);
  const isLoadingTTSData = result.some(({ isLoading }) => isLoading);
  const isSuccess = result.every(({ isSuccess }) => isSuccess);
  const data = result.map(({ data }) => data);

  // 모든 진행 중인 API 요청 취소 함수
  const cancleQueries = () => {
    controllerRefs?.current.forEach((controller) => {
      controller.abort();
    });
  };

  return { data, isLoadingTTSData, cancleQueries, isError, isSuccess };
};
```
