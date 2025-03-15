import {
  CustomLink,
  Description,
  Detail,
  Label,
  ProjectContainer,
} from "./styles";

const Catholic = () => {
  const openInNewWindow = (url: string) => {
    window.open(url, "_blank", "width=400,height=649");
  };

  return (
    <ProjectContainer>
      <Label>가톨릭대백과</Label>
      <Detail>Frontend Engineer</Detail>
      <Detail>2024.08 - 2024.12</Detail>
      <Description>
        가톨릭대사전을 디지털화하기 위한 검수 페이지를 개발하였습니다. OCR을
        활용해 디지털화된 사전의 잘못 인식된 부분을 쉽고 효율적으로 수정할 수
        있는 기능을 제공합니다.
        <br />
        <br />
        React, Typescript, Recoil, Styled-Components를 이용해 개발했습니다.
      </Description>
      <Description>
        <Label>What I did.</Label>
      </Description>
    </ProjectContainer>
  );
};

export default Catholic;
