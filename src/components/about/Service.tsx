import styled from '@emotion/styled';
import { SectionTitle } from '../../styles/common';
import KCanberra from './Services/KCanberra';
import Nambti from './Services/Nambti';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 780px) {
    padding: 0 16px;
  }
`;

const Service = () => {
  return (
    <Container>
      <SectionTitle>Personal Project.</SectionTitle>
      <KCanberra />
      <Nambti />
    </Container>
  );
};

export default Service;
