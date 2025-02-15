import { graphql } from "gatsby";
import Layout from "../components/Layout";
import styled from "@emotion/styled";
import "prismjs/themes/prism-solarizedlight.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

const BlogPostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const PostDetails = styled.div`
  border-bottom: 1px solid #d0d0d0;
`;

const Title = styled.h1`
  font-size: 2.5rem;
`;

const CreatedAt = styled.p`
  font-size: 1rem;
  color: #999;
  margin-right: 8px;
`;

const Tags = styled.div`
  margin-bottom: 16px;
`;

const Tag = styled.span`
  padding: 4px 8px;
  border-radius: 16px;
  background-color: #c3eeb5;
  margin-right: 6px;
  font-size: 0.9rem;
`;

const Content = styled.div`
  padding-top: 24px;

  pre {
    background: #d5ddef !important;
    border-radius: 5px;
    padding: 10px;
  }
`;

interface BlogPostProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        date: string;
      };
      html: string;
    };
  };
}

export default function BlogPost({ data }: BlogPostProps) {
  const post = data.markdownRemark;
  return (
    <Layout>
      <PostDetails>
        <Title>{post.frontmatter.title}</Title>
        <CreatedAt>{post.frontmatter.date}</CreatedAt>
        <Tags>
          {["React", "CSS"].map((e) => (
            <Tag>{e}</Tag>
          ))}
        </Tags>
      </PostDetails>
      <Content dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;
