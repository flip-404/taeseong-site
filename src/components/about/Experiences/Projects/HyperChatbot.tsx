import { Description, Detail, Label, ProjectContainer } from "./styles";

const HyperChatbot = () => {
  return (
    <ProjectContainer>
      <Label>하이퍼챗봇</Label>
      <Detail>Frontend Engineer</Detail>
      <Detail>2023.01 - 2023.06</Detail>
      <Description>
        검색 기반 챗봇 서비스입니다. 사용자와의 대화를 미리 정해진 플로우로
        응답하도록 설정할 수 있어 특정 시나리오나 업무 프로세스에 맞게
        커스터마이징할 수 있습니다.
        <br />
        <br />
        React, Typescript, Recoil, Styled-Components를 이용해 개발했습니다.
      </Description>
      <Description>
        <Label>What I did.</Label>
        <ul>
          <li>설명설명설명설명</li>
          <li>설명설명설명설명 [상세 코드]</li>
          <li>설명설명설명설명</li>
        </ul>
      </Description>
    </ProjectContainer>
  );
};

export default HyperChatbot;
