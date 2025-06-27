import { ExternalLink } from '../../../molecules/Links';
import { LinkIcon } from '../../../molecules/ProjectLink';
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

const KGM_Project = () => {
  return (
    <ProjectContainer>
      <Label
        className="hasLink"
        onClick={() => {
          window.open('https://kgchat.kg-mobility.com/', '_blank', 'width=400,height=649');
        }}
      >
        KGM 챗봇 <LinkIcon />
        <Contribution>(기여도: 30%)</Contribution>
      </Label>
      <Detail>Frontend Engineer</Detail>
      <Detail>2024.04 - 2024.10</Detail>
      <Description>
        <ExternalLink href="https://www.kg-mobility.com/">KGM 공식 홈페이지</ExternalLink>
        내에서 고객이 원하는 정보를 쉽게 찾을 수 있도록 도와주는
        <ExternalLink
          href="https://kgchat.kg-mobility.com/"
          onClick={(event) => {
            event.preventDefault();
            window.open('https://kgchat.kg-mobility.com/', '_blank', 'width=400,height=649');
          }}
        >
          챗봇 서비스
        </ExternalLink>
        입니다.
      </Description>
      <TechStack>
        <CodeBlock>React</CodeBlock> <CodeBlock>Typescript</CodeBlock>
        <CodeBlock>styled-components</CodeBlock>
        <CodeBlock>recoil</CodeBlock>
        <CodeBlock>swr</CodeBlock>
      </TechStack>
      <MyRole>
        <Label>What I did.</Label>
        <ul>
          <li>KGM API를 챗봇에 연동하여 규칙 기반 챗봇을 개발하였습니다.</li>
          <ul>
            <li>메시지 컴포넌트 및 챗봇 UI 개발</li>
            <li>챗봇 UI와 KGM API 연동을 위한 상태 관리 구현</li>
          </ul>
        </ul>
      </MyRole>
    </ProjectContainer>
  );
};

export default KGM_Project;
