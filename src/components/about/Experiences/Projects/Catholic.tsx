import { ExternalLink } from "../../../molecules/Links";
import { Description, Detail, Label, ProjectContainer } from "./styles";

const Catholic = () => {
  return (
    <ProjectContainer>
      <Label>가톨릭대백과</Label>
      <Detail>Frontend Engineer</Detail>
      <Detail>2024.08 - 2024.12</Detail>
      <Description>
        가톨릭대사전을 디지털화하기 위한 검수 페이지를 개발하였습니다. OCR을
        활용해 디지털화된 사전의 잘못 인식된 부분을 쉽고 효율적으로 수정할 수
        있는 기능을 제공합니다. 검수 페이지를 통해 약 45,000개의 사전 데이터를
        &nbsp;
        <ExternalLink href="https://encyclopedia.catholic.or.kr/">
          한국가톨릭대사전 홈페이지
        </ExternalLink>
        에 등재하였습니다.
        <br />
        <br />
        React, Typescript, Recoil, Styled-Components를 이용해 개발했습니다.
      </Description>
      <Description>
        <Label>What I did.</Label>
        <ul>
          <li>
            가톨릭 대백과 원본과 OCR 결과를 비교 검수할 수 있는 검수 페이지를
            개발하였습니다.
          </li>
          <li>
            HTML5 요소(텍스트, 이미지, 테이블 등)를 다룰 수 있는 커스텀 에디터를
            개발하였습니다.
          </li>
          <li>커스텀 에디터의 '찾기/바꾸기' 기능을 구현하였습니다.</li>
        </ul>
      </Description>
    </ProjectContainer>
  );
};

export default Catholic;
