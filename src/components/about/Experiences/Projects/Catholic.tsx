import styled from "@emotion/styled";
import { Link } from "gatsby";

const Label = styled.h4`
  margin: 0;
  font-size: 1.5rem;
`;

const Detail = styled.p`
  margin: 8px 0;
  color: #949494;
`;

const Description = styled.div`
  margin-bottom: 50px;
`;

const CustomLink = styled.span`
  color: #0000ee;
  text-decoration: underline;
  cursor: pointer;
`;

const Catholic_Project = () => {
  const openInNewWindow = (url: string) => {
    window.open(url, "_blank", "width=400,height=649");
  };

  return (
    <>
      <Label>가톨릭대백과</Label>
      <Detail>Frontend Engineer</Detail>
      <Detail>2022.09 - 2023.01</Detail>
      <Description>
        <a
          href="https://www.kg-mobility.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          KGM 공식 홈페이지&nbsp;
        </a>
        내에서 고객이 원하는 정보를 쉽게 찾을 수 있도록 도와주는&nbsp;
        <CustomLink
          onClick={() => openInNewWindow("https://kgchat.kg-mobility.com/")}
        >
          챗봇 서비스
        </CustomLink>
        <a
          href="https://kgchat.kg-mobility.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          KGM 공식 홈페이지&nbsp;
        </a>
        를 개발하였습니다. 2명의 FE 개발자와 2명의 개발자, 백엔드 개발자,
        디자이너, PO와 함 팀을 이뤄 애자일 프로세스로 작업을 진행했습니다.
        <br />
        <br />
        React, Typescript, Recoil, Styled-Components를 이용해 개발했습니다.
      </Description>
      <Description>
        <Label>What I did.</Label>
      </Description>
    </>
  );
};

export default Catholic_Project;
