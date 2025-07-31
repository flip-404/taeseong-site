import styled from '@emotion/styled';

const BlogPreviewWrapper = styled.div`
  box-sizing: border-box;
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
    <article className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300 cursor-pointer mb-4">
      {/* 날짜 */}
      <div className="flex items-center text-sm text-gray-500 mb-1">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        {date}
      </div>

      {/* 제목 */}
      <h2 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
        {title}
      </h2>

      {/* 설명 */}
      <p className="text-gray-600 mb-1 leading-relaxed">{description}</p>

      {/* 태그 */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {tag}
          </span>
        ))}
      </div>

      {/* 호버 시 나타나는 화살표 아이콘 */}
      <div className="mt-4 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <span className="text-sm font-medium mr-2">자세히 보기</span>
        <svg
          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </article>
  );
};

export default BlogPreview;
