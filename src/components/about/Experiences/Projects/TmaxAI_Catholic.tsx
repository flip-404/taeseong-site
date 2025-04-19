import { ExternalLink } from "../../../molecules/Links";
import { LinkIcon } from "../../../molecules/ProjectLink";
import {
  CodeBlock,
  Contribution,
  Description,
  Detail,
  Label,
  MyRole,
  ProjectContainer,
  TechStack,
} from "./styles";

const Catholic = () => {
  return (
    <ProjectContainer>
      <Label
        className="hasLink"
        onClick={() =>
          window.open("https://encyclopedia.catholic.or.kr/", "_blank")
        }
      >
        가톨릭대백과 <LinkIcon />
        <Contribution>(기여도: 50%)</Contribution>
      </Label>
      <Detail>Frontend Engineer</Detail>
      <Detail>2024.08 - 2024.12</Detail>
      <Description>
        가톨릭대사전을 디지털화하기 위한 검수 페이지를 개발하였습니다. OCR을
        활용해 디지털화된 사전의 잘못 인식된 부분을 쉽고 효율적으로 수정할 수
        있는 기능을 제공합니다. 검수 페이지를 통해 약 45,000개의 사전 데이터를
        <ExternalLink href="https://encyclopedia.catholic.or.kr/">
          한국가톨릭대사전 홈페이지
        </ExternalLink>
        에 등재하였습니다.
      </Description>
      <TechStack>
        <CodeBlock>React</CodeBlock> <CodeBlock>Typescript</CodeBlock>
        <CodeBlock>dompurify</CodeBlock>
        <CodeBlock>Styled-Components</CodeBlock>
      </TechStack>
      <MyRole>
        <Label>What I did.</Label>
        <ul>
          <li>
            OCR 결과를 기반으로 한 검수 페이지 개발
            <ExternalLink href="/detail/Catholic/detail_1">
              [결과 화면]
            </ExternalLink>
            <ul>
              <li>
                HTML5 요소(텍스트, 이미지, 테이블 등)를 DOM 직접 참조 방식으로
                구현하여 커스텀 에디터 개발
              </li>
              <li>오탈자 하이라이팅 기능 구현</li>
              <li>신속한 검수 및 수정을 위한 '찾기/바꾸기' 기능 구현</li>
              <li>Canvas API를 활용한 OCR 결과 기반 바운딩 박스 시각화 구현</li>
            </ul>
          </li>
        </ul>
      </MyRole>
    </ProjectContainer>
  );
};

export default Catholic;
