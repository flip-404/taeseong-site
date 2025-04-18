import styled from "@emotion/styled";

export const ProjectContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-radius: 8px;
  transition: box-shadow 0.3s ease;

  &:hover {
    background-color: #f9f9f9;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const Label = styled.h4`
  margin: 0;
  font-size: 1.5rem;
`;

export const Detail = styled.p`
  margin: 8px 0;
  color: #949494;
`;

export const Description = styled.div`
  line-height: 24px;
  margin-bottom: 50px;

  li {
    margin-bottom: 10px;
  }
`;

export const CodeBlock = styled.code`
  padding: 2.52px 5.44px;
  background-color: rgb(242, 242, 242);
  border-radius: 4px;
  color: rgb(99, 193, 126);
`;
