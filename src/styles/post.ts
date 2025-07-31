import styled from '@emotion/styled';

export const PostDetails = styled.div`
  box-sizing: border-box;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 1rem;

  @media (max-width: 780px) {
    padding: 0 24px 1.5rem 24px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  color: #1f2937;
  margin: 0 0 1rem 0;
  letter-spacing: -0.025em;

  @media (max-width: 780px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

export const CreatedAt = styled.p`
  font-size: 0.95rem;
  color: #6b7280;
  margin: 0 0 1.5rem 0;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0;

  @media (max-width: 480px) {
    gap: 0.375rem;
  }
`;

export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
  color: #065f46;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid #a7f3d0;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  /* 호버 효과 */
  &:hover {
    background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
    border-color: #6ee7b7;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(16, 185, 129, 0.15);
  }

  /* 태그 앞에 # 기호 추가 */
  &::before {
    content: '#';
    opacity: 0.7;
    margin-right: 0.25rem;
    font-weight: 600;
  }

  @media (max-width: 480px) {
    padding: 0.25rem 0.625rem;
    font-size: 0.8rem;
  }
`;
export const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-top: 24px;

  @media (max-width: 780px) {
    padding: 24px;
  }

  /* 기본 텍스트 스타일링 */
  color: #374151;
  line-height: 1.7;
  font-size: 16px;

  /* 제목 스타일링 */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    line-height: 1.3;
    margin: 2rem 0 1rem 0;
    color: #1f2937;
  }

  h1 {
    font-size: 2.25rem;
    border-bottom: 2px solid #e5e7eb;
    padding-bottom: 0.5rem;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 1.875rem;
    margin-top: 3rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-top: 2.5rem;
  }

  h4 {
    font-size: 1.25rem;
  }

  h5 {
    font-size: 1.125rem;
  }

  h6 {
    font-size: 1rem;
  }

  /* 단락 스타일링 */
  p {
    margin: 1.5rem 0;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  /* 링크 스타일링 */
  a {
    color: #2563eb;
    text-decoration: underline;
    text-decoration-color: #93c5fd;
    text-underline-offset: 2px;
    transition: all 0.2s ease;

    &:hover {
      color: #1d4ed8;
      text-decoration-color: #2563eb;
    }
  }

  /* 강조 텍스트 */
  strong,
  b {
    font-weight: 700;
    color: #1f2937;
  }

  em,
  i {
    font-style: italic;
  }

  /* 인용문 */
  blockquote {
    margin: 2rem 0;
    padding: 1rem 1.5rem;
    border-left: 4px solid #3b82f6;
    background: #f8fafc;
    font-style: italic;
    color: #4b5563;

    p {
      margin: 0.5rem 0;

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  /* 코드 스타일링 */
  code {
    background: #f1f5f9;
    color: #e11d48;
    padding: 0.25rem 0.5rem;
    border-radius: 0.375rem;
    font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
    font-size: 0.875rem;
  }

  pre {
    background: #1e293b;
    color: #e2e8f0;
    padding: 1.5rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin: 2rem 0;

    code {
      background: transparent;
      color: inherit;
      padding: 0;
      border-radius: 0;
      font-size: 0.875rem;
    }
  }

  /* 리스트 스타일링 */
  ul,
  ol {
    margin: 1.5rem 0;
    padding-left: 2rem;
  }

  ul {
    list-style-type: disc;

    ul {
      list-style-type: circle;
      margin: 0.5rem 0;

      ul {
        list-style-type: square;
      }
    }
  }

  ol {
    list-style-type: decimal;

    ol {
      list-style-type: lower-alpha;
      margin: 0.5rem 0;

      ol {
        list-style-type: lower-roman;
      }
    }
  }

  li {
    margin: 0.5rem 0;
    line-height: 1.6;

    p {
      margin: 0.5rem 0;
    }
  }

  /* 테이블 스타일링 */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
    font-size: 0.9rem;
  }

  th,
  td {
    border: 1px solid #d1d5db;
    padding: 0.75rem 1rem;
    text-align: left;
  }

  th {
    background: #f9fafb;
    font-weight: 600;
    color: #374151;
  }

  tr:nth-child(even) {
    background: #f9fafb;
  }

  /* 구분선 */
  hr {
    border: none;
    height: 1px;
    background: #e5e7eb;
    margin: 3rem 0;
  }

  /* 이미지 스타일링 */
  img {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
    margin: 2rem 0;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  /* 삭제된 텍스트 */
  del,
  s {
    text-decoration: line-through;
    color: #6b7280;
  }

  /* 밑줄 텍스트 */
  u {
    text-decoration: underline;
    text-decoration-color: #fbbf24;
    text-underline-offset: 2px;
  }

  /* 작은 텍스트 */
  small {
    font-size: 0.875rem;
    color: #6b7280;
  }

  /* 위첨자, 아래첨자 */
  sup,
  sub {
    font-size: 0.75rem;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sup {
    top: -0.5rem;
  }

  sub {
    bottom: -0.25rem;
  }

  /* 키보드 입력 스타일 */
  kbd {
    background: #374151;
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-family: monospace;
    font-size: 0.875rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  /* 마크 하이라이트 */
  mark {
    background: #fef3c7;
    color: #92400e;
    padding: 0.125rem 0.25rem;
    border-radius: 0.25rem;
  }

  /* 정의 리스트 */
  dl {
    margin: 1.5rem 0;
  }

  dt {
    font-weight: 600;
    color: #1f2937;
    margin-top: 1rem;
  }

  dd {
    margin: 0.5rem 0 1rem 2rem;
    color: #4b5563;
  }

  /* 세부사항/요약 */
  details {
    margin: 1.5rem 0;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    padding: 1rem;
  }

  summary {
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 0.5rem;

    &:hover {
      color: #2563eb;
    }
  }

  /* 주소 스타일 */
  address {
    font-style: italic;
    color: #6b7280;
    margin: 1rem 0;
  }

  /* 반응형 조정 */
  @media (max-width: 768px) {
    font-size: 15px;

    h1 {
      font-size: 1.875rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.25rem;
    }

    ul,
    ol {
      padding-left: 1.5rem;
    }

    pre {
      padding: 1rem;
      font-size: 0.8rem;
    }

    table {
      font-size: 0.8rem;
    }

    th,
    td {
      padding: 0.5rem 0.75rem;
    }
  }
`;
