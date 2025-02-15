import React from "react";
import styled from "@emotion/styled";
import Header from "./Header";
import Footer from "./Footer";

const LayoutContainer = styled.div`
  position: relative;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.main`
  padding-top: 80px;
  min-width: 780px;
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
