import { ExternalLink } from "../../../molecules/Links";
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

import { LinkIcon } from "../../../molecules/ProjectLink";

const HyperChatbot = () => {
  return (
    <ProjectContainer>
      <Label
        className="hasLink"
        onClick={() =>
          window.open("https://www.tmax.co.kr/hyperchatbot", "_blank")
        }
      >
        하이퍼챗봇
        <LinkIcon />
        <Contribution>(기여도: 30%)</Contribution>
      </Label>
      <Detail>Frontend Engineer</Detail>
      <Detail>2023.01 - 2023.06</Detail>
      <Description>
        검색 기반 챗봇 서비스입니다. 사용자와의 대화를 미리 정해진 플로우로
        응답하도록 설정할 수 있어 특정 시나리오나 업무 프로세스에 맞게
        커스터마이징할 수 있습니다.
      </Description>
      <TechStack>
        <CodeBlock>React</CodeBlock>
        <CodeBlock>Typescript</CodeBlock>
        <CodeBlock>Recoil</CodeBlock> <CodeBlock>Styled-Components</CodeBlock>
      </TechStack>
      <MyRole>
        <Label>What I did.</Label>
        <ul>
          <li>
            하이퍼챗봇 2.0(규칙 기반 챗봇) 서비스 웹 앱의 전반적인 클라이언트 측
            개발을 수행했습니다.
          </li>
          <li>
            채팅방에서 사용되는 텍스트, 이모티콘, 이미지 컴포넌트의 UI 및 기능을
            구현했습니다.
          </li>
          <li>
            대화 흐름을 설계할 수 있는 플로우 페이지를 구현하였습니다. reactFlow
            라이브러리를 사용해 다양한 노드를 생성 후 드래그 앤 드롭하여 원하는
            대화 흐름을 만들 수 있습니다.
            <ExternalLink href="/detail/HyperChatbot/detail_1">
              [결과 화면]
            </ExternalLink>
          </li>
        </ul>
      </MyRole>
    </ProjectContainer>
  );
};

export default HyperChatbot;
