import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import 'prismjs/themes/prism-solarizedlight.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import { Helmet } from 'react-helmet';
import { Content } from '../styles/post';

interface DetailPostProps {
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

export default function DetailPost({ data }: DetailPostProps) {
  const post = data.markdownRemark;
  return (
    <>
      <Helmet>
        <title>Taeseong Dev Blog | 상세 코드</title>
      </Helmet>
      <Layout>
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
      }
      html
    }
  }
`;
