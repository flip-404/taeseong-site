import React from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import Footer from './Footer';

const LayoutContainer = styled.div`
  position: relative;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media print {
    margin-top: 0;
  }
`;

const Main = styled.main`
  padding-top: 80px;
  width: 780px;

  @media print {
    padding-top: 0;
  }
`;

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <Main>
        {children}
        <Footer />
      </Main>
    </LayoutContainer>
  );
};

export default Layout;
