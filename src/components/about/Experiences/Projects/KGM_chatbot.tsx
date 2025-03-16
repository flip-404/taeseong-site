import { ExternalLink } from "../../../molecules/Links";
import { Description, Detail, Label, ProjectContainer } from "./styles";

const KGM_Project = () => {
  const openInNewWindow = (url: string) => {};

  return (
    <ProjectContainer>
      <Label>KGM 챗봇</Label>
      <Detail>Frontend Engineer</Detail>
      <Detail>2024.04 - 2024.10</Detail>
      <Description>
        <ExternalLink href="https://www.kg-mobility.com/">
          KGM 공식 홈페이지
        </ExternalLink>
        내에서 고객이 원하는 정보를 쉽게 찾을 수 있도록 도와주는&nbsp;
        <ExternalLink
          href="https://kgchat.kg-mobility.com/"
          onClick={(event) => {
            event.preventDefault();
            window.open(
              "https://kgchat.kg-mobility.com/",
              "_blank",
              "width=400,height=649"
            );
          }}
        >
          챗봇 서비스
        </ExternalLink>
        입니다. 2명의 FE 개발자와 2명의 개발자, 백엔드 개발자, 디자이너, PO와 함
        팀을 이뤄 애자일 프로세스로 작업을 진행했습니다.
        <br />
        <br />
        React, Typescript, Recoil, Styled-Components를 이용해 개발했습니다.
      </Description>
      <Description>
        <Label>What I did.</Label>
        <ul>
          <li>KGM API를 챗봇에 연동하여 규칙 기반 챗봇을 개발하였습니다</li>
        </ul>
      </Description>
    </ProjectContainer>
  );
};

export default KGM_Project;
