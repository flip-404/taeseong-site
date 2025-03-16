import { Description, Detail, Label, ProjectContainer } from "./styles";

const TmaxAIHomePage = () => {
  return (
    <ProjectContainer>
      <Label>TmaxAI 홈페이지</Label>
      <Detail>Frontend Engineer</Detail>
      <Detail>2023.12 - 2024.03</Detail>
      <Description>
        TmaxAI 공식 홈페이지입니다. STT(음성 인식), TTS(텍스트 음성 변환),
        OCR(문자 인식) 등의 AI 기술을 직접 체험할 수 있는 기능을 제공하며, AI
        기술 도입을 원하는 기업이나 개인을 위한 문의 기능을 지원합니다.
        <br />
        <br />
        React, Typescript, Recoil, Styled-Components를 이용해 개발했습니다.
      </Description>
      <Description>
        <Label>What I did.</Label>
        <ul>
          <li>광학문자인식(OCR) 기능 체험하기 기능 개발</li>
          <li>Canvas API를 활용한 OCR Bounding Box 시각화</li>
          <li>
            React-hook-form을 활용한 문의하기(도입문의) 기능 개발 및 폼 최적화
          </li>
        </ul>
      </Description>
    </ProjectContainer>
  );
};

export default TmaxAIHomePage;
