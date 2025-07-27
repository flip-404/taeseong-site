import { ExternalLink } from '../../../molecules/Links';
import {
  CodeBlock,
  Contribution,
  Description,
  Detail,
  Label,
  MyRole,
  ProjectContainer,
  TechStack,
} from './styles';

const TmaxAIHomePage = () => {
  return (
    <ProjectContainer>
      <Label>
        TmaxAI 홈페이지 <Contribution>&nbsp;(기여도: 50%)</Contribution>
      </Label>
      <Detail>Frontend Engineer</Detail>
      <Detail>2023.12 - 2024.03</Detail>
      <Description>
        TmaxAI 공식 홈페이지입니다. STT(음성 인식), TTS(텍스트 음성 변환), OCR(문자 인식) 등의 AI
        기술을 직접 체험할 수 있는 기능을 제공하며, AI 기술 도입을 원하는 기업이나 개인을 위한 문의
        기능을 지원합니다.
      </Description>
      <TechStack>
        <CodeBlock>React</CodeBlock> <CodeBlock>Typescript</CodeBlock>
        <CodeBlock>Recoil</CodeBlock> <CodeBlock>Styled-Components</CodeBlock>
      </TechStack>
      <MyRole>
        <Label>What I did.</Label>
        <ul>
          <li>
            인터랙티브 스크롤 애니메이션 개발
            <ExternalLink href="/detail/TmaxAI_Homepage/detail_1">[상세]</ExternalLink>{' '}
            <ul className="innerList">
              <li>스크롤 이벤트의 과도한 호출 방지하기 위한 쓰로틀링(throttling) 기법 적용</li>
            </ul>
          </li>

          <li>
            광학문자인식(OCR) 기능 체험하기 기능 개발
            <ExternalLink href="/detail/TmaxAI_Homepage/detail_2">[상세]</ExternalLink>
            <ul className="innerList">
              <li>원본 이미지 위의 텍스트 영역을 확인하고 상호작용할 수 있는 인터페이스 구현</li>
              <li>
                대량의 바운딩 박스를 메인 스레드 블로킹 없이 처리하기 위해 Web Worker와
                OffscreenCanvas API를 활용한 로직 구현
              </li>
            </ul>
          </li>
          <li>
            기술 도입 문의하기 기능 개발
            <ExternalLink href="/detail/TmaxAI_Homepage/detail_3">[결과 화면]</ExternalLink>
            <ul className="innerList">
              <li>React-hook-form을 활용한 유효성 검사 구현</li>
              <li>입력에 따른 리렌더링 방지를 통한 폼 성능 최적화</li>
            </ul>
          </li>
        </ul>
      </MyRole>
    </ProjectContainer>
  );
};

export default TmaxAIHomePage;
