import React from 'react';
import { Link as Link_ } from 'gatsby';
import styled from '@emotion/styled';
import { useLocation } from '@reach/router';

const HeaderContainer = styled.header`
  box-sizing: border-box;
  z-index: 1000;
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  color: black;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

  @media (max-width: 780px) {
    height: 45px;
    padding: 0 8px;
  }

  @media print {
    display: none;
  }
`;

const Link = styled(Link_)`
  padding-left: 26px;
  font-size: 24px;
  font-weight: 900;
  text-decoration: none;
  color: inherit;
  &:visited {
    color: inherit;
  }

  @media (max-width: 780px) {
    padding-left: 16px;
    font-size: 18px;
  }
`;

const Header = () => {
  const location = useLocation();

  let linkTo = '/';
  let label = 'Taeseong Blog';

  if (location.pathname.startsWith('/about') || location.pathname.startsWith('/detail')) {
    label = 'Taeseong Resume';
    linkTo = '/about';
  }

  return (
    <HeaderContainer>
      <Link to={linkTo}>{label}</Link>
    </HeaderContainer>
  );
};

export default Header;
