import styled from "@emotion/styled";
import { SectionTitle } from "../../styles/common";
import { CustomTable, RowWrapper, T_Key, T_Value } from "../molecules/Table";
import { Link } from "gatsby";
import CHEXCAR from "./Experiences/CHEXCAR";
import TmaxCoreAI from "./Experiences/TmaxCoreAI";

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
