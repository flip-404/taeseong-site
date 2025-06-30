import styled from "@emotion/styled";
import { SectionTitle } from "../../styles/common";
import CHEXCAR from "./Experiences/CHEXCAR";
import TmaxCoreAI from "./Experiences/TmaxCoreAI";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 780px) {
    padding: 0 16px;
  }
`;

const Experience = () => {
  return (
    <Container>
      <SectionTitle>Experience.</SectionTitle>
      <CHEXCAR />
      <TmaxCoreAI />
    </Container>
  );
};

export default Experience;
