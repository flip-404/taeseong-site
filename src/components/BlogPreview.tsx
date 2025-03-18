import styled from "@emotion/styled";

const BlogPreviewWrapper = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  &:hover {
    background-color: #d2ebd1;
  }
`;

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  color: #40d60d;
  margin: 0 0 8px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: black;
  margin: 0 0 12px;
  overflow: hidden;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
`;

const CreatedAt = styled.div`
  font-size: 12px;
  color: #999;
  margin-right: 8px;
`;

const TagList = styled.div`
  display: flex;
`;

const Tag = styled.span`
  padding: 4px 8px;
  border-radius: 16px;
  font-size: 0.7rem;
  color: black;
  margin-right: 6px;
  border: 1px solid #57d72c;
`;

const BlogPreview = ({
  title,
  description,
  date,
  tags,
}: {
  title: string;
  description: string;
  date: string;
  tags: string[];
}) => {
  return (
    <BlogPreviewWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Meta>
        <CreatedAt>{date}</CreatedAt>
        <TagList>
          {tags.map((tag) => (
            <Tag>{tag}</Tag>
          ))}
        </TagList>
      </Meta>
    </BlogPreviewWrapper>
  );
};

export default BlogPreview;
