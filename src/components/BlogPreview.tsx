import styled from "@emotion/styled";

const BlogPreviewWrapper = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Title = styled.h2`
  font-size: 1.6rem;
  color: #333;
  margin: 0 0 8px;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0 0 12px;
`;

const Meta = styled.div`
  font-size: 0.9rem;
  color: #999;
  margin: 0 0 12px;
`;

const TagList = styled.div`
  display: flex;
  gap: 8px;
`;

const Tag = styled.span`
  background-color: #f1f1f1;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 0.9rem;
  color: #007bff;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;

const BlogPreview = ({
  title,
  description,
  date,
  tag,
}: {
  title: string;
  description: string;
  date: string;
  tag: string;
}) => {
  return (
    <BlogPreviewWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Meta>
        <span>{date}</span>
      </Meta>
      <TagList>
        <Tag>{tag}</Tag>
      </TagList>
    </BlogPreviewWrapper>
  );
};

export default BlogPreview;
