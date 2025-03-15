import styled from "@emotion/styled";

export const PostDetails = styled.div`
  border-bottom: 1px solid #d0d0d0;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;

export const CreatedAt = styled.p`
  font-size: 1rem;
  color: #999;
  margin-right: 8px;
`;

export const Tags = styled.div`
  margin-bottom: 16px;
`;

export const Tag = styled.span`
  padding: 4px 8px;
  border-radius: 16px;
  background-color: #c3eeb5;
  margin-right: 6px;
  font-size: 0.9rem;
`;

export const Content = styled.div`
  padding-top: 24px;

  pre {
    background: #d5ddef !important;
    border-radius: 5px;
    padding: 10px;
  }

  li {
    margin-top: 8px;
  }

  img {
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.15);
  }
`;
