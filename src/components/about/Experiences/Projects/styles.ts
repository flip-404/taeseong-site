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
  display: inline-flex;
  align-items: center;
  margin: 0;
  font-size: 1rem;
  border-radius: 4px;
  padding: 4px 0px;

  svg {
    width: 14px;
    height: 14px;
  }

  &.hasLink {
    cursor: pointer;
    &:hover {
      background-color: #f0f0f0;
      color: #63c17e;

      svg {
        fill: #63c17e;
      }
    }
  }
`;

export const Detail = styled.p`
  margin: 8px 0;
  color: #949494;
`;

export const Description = styled.div`
  line-height: 24px;
  margin-bottom: 50px;

  & > li {
    margin-bottom: 10px;
  }

  .innerList {
    margin-bottom: 10px;
  }
`;

export const CodeBlock = styled.code`
  padding: 2.52px 5.44px;
  background-color: rgb(242, 242, 242);
  border-radius: 4px;
  color: rgb(99, 193, 126);
`;

export const Contribution = styled.span`
  font-weight: 500;
  font-size: 12px;
`;
