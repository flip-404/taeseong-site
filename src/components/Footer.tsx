import styled from "@emotion/styled";

const FooterContainer = styled.footer`
  margin-top: 100px;
  display: flex;
  justify-content: start;
  padding: 26px 0px;
  color: rgb(148, 148, 148);
  font-size: 12px;

  @media print {
    display: none;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        © {new Date().getFullYear()}{" "}
        <a
          href="https://github.com/flip-404"
          target="_blank"
          rel="noopener noreferrer"
        >
          Taeseong
        </a>
        , Built with&nbsp;
        <a
          href="https://www.gatsbyjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>
      </p>
    </FooterContainer>
  );
};

export default Footer;
