import { graphql } from "gatsby";
import Layout from "../components/Layout";
import "prismjs/themes/prism-solarizedlight.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import { Helmet } from "react-helmet";
import {
  Content,
  CreatedAt,
  PostDetails,
  Tag,
  Tags,
  Title,
} from "../styles/post";

interface BlogPostProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        date: string;
        tag: string;
      };
      html: string;
    };
  };
}

export default function BlogPost({ data }: BlogPostProps) {
  const post = data.markdownRemark;
  return (
    <>
      <Helmet>
        <title>Taeseong Dev Blog | {post.frontmatter.title}</title>
      </Helmet>
      <Layout>
        <PostDetails>
          <Title>{post.frontmatter.title}</Title>
          <CreatedAt>{post.frontmatter.date}</CreatedAt>
          <Tags>
            {[post.frontmatter.tag].map((e) => (
              <Tag>{e}</Tag>
            ))}
          </Tags>
        </PostDetails>
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    </>
  );
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        tag
      }
      html
    }
  }
`;
