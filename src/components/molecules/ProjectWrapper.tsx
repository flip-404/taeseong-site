import styled from "@emotion/styled";

export const ProjectWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  h4 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: bold;
  }

  p {
    margin: 8px 0;
    color: #949494;
  }

  div {
    margin-bottom: 50px;
  }

  li {
    margin-bottom: 10px;
  }

  a {
    color: #0000ee;
    text-decoration: underline;
    cursor: pointer;
  }
`;
