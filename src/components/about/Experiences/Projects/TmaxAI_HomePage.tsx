import { InternalLink } from "../../../molecules/Links";
import {
  CodeBlock,
  Contribution,
  Description,
  Detail,
  Label,
  ProjectContainer,
} from "./styles";

const TmaxAIHomePage = () => {
  return (
    <ProjectContainer>
      <Label>
        TmaxAI 홈페이지 <Contribution>&nbsp;(기여도: 50%)</Contribution>
      </Label>
      <Detail>Frontend Engineer</Detail>
      <Detail>2023.12 - 2024.03</Detail>
      <Description>
        TmaxAI 공식 홈페이지입니다. STT(음성 인식), TTS(텍스트 음성 변환),
        OCR(문자 인식) 등의 AI 기술을 직접 체험할 수 있는 기능을 제공하며, AI
        기술 도입을 원하는 기업이나 개인을 위한 문의 기능을 지원합니다.
        <br />
        <br />
        <CodeBlock>React</CodeBlock>, <CodeBlock>Typescript</CodeBlock>,&nbsp;
        <CodeBlock>Recoil</CodeBlock>, <CodeBlock>Styled-Components</CodeBlock>
        를 이용해 개발했습니다.
      </Description>
      <Description>
        <Label>What I did.</Label>
        <ul>
          <li>
            TmaxAI 소개 페이지를 위한 인터랙티브 스크롤 애니메이션을
            개발했습니다. 사용자의 스크롤 동작에 반응하여 세 개의 원형 요소가
            자연스럽게 중앙에 모이는 시각적 효과를 구현했습니다.&nbsp;
            <InternalLink href="/detail/TmaxAI_Homepage/detail_1">
              [상세 코드]
            </InternalLink>
          </li>
          <li>
            광학문자인식(OCR) 기능 체험하기 기능 개발했습니다. 이미지에서 추출된
            텍스트 정보를 구조화하고, 원본 이미지 위에 직관적인 바운딩 박스로
            시각화하여 사용자가 텍스트 영역을 쉽게 확인하고 상호작용할 수 있는
            인터페이스를 구현했습니다. 이 과정에서 대량의 바운딩 박스를 메인
            스레드 블로킹 없이 처리하기 위해 Web Worker와 OffscreenCanvas API를
            활용해 개발했습니다. &nbsp;
            <InternalLink href="/detail/TmaxAI_Homepage/detail_2">
              [상세 코드]
            </InternalLink>
          </li>
          <li>
            기술 도입 문의하기 기능을 개발했습니다. React-hook-form을 활용하여
            사용자의 입력값을 유효성 검사하고, 서버로 전송하는 로직을
            구현했습니다. 또한, 사용자가 입력한 정보를 서버로 전송하는 과정에서
            발생할 수 있는 오류를 최소화하고 리렌더링을 최적화하기 위해 폼을
            최적화했습니다. &nbsp;
            <InternalLink href="/detail/TmaxAI_Homepage/detail_3">
              [예시 화면]
            </InternalLink>
          </li>
        </ul>
      </Description>
    </ProjectContainer>
  );
};

export default TmaxAIHomePage;
