import React from "react";
import { Link as Link_ } from "gatsby";
import styled from "@emotion/styled";
import { useLocation } from "@reach/router";

const HeaderContainer = styled.header`
  z-index: 1000;
  position: fixed;
  top: 0px;
  height: 60px;
  width: 100%;
  background-color: #2db400;
  display: flex;
  align-items: center;
  color: white;
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
`;

const Header = () => {
  const location = useLocation();

  let linkTo = "/";
  let label = "Taeseong Blog";

  if (
    location.pathname.startsWith("/about") ||
    location.pathname.startsWith("/detail")
  ) {
    label = "Taeseong Resume";
    linkTo = "/about";
  }

  return (
    <HeaderContainer>
      <Link to={linkTo}>{label}</Link>
    </HeaderContainer>
  );
};

export default Header;
