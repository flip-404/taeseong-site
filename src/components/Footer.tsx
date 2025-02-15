import React from "react";
import { Link as Link_ } from "gatsby";
import styled from "@emotion/styled";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: start;
  padding: 26px 0px;
  color: rgb(148, 148, 148);
  font-size: 12px;
`;

const Link = styled(Link_)``;

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        © {new Date().getFullYear()}{" "}
        <Link
          to="https://www.gatsbyjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Taeseong
        </Link>
        , Built with
        <Link
          to="https://github.com/flip-404"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </Link>
      </p>
    </FooterContainer>
  );
};

export default Footer;
