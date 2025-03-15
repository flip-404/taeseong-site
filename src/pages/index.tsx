import "../globalStyle.css";
import { graphql, Link } from "gatsby";
import BlogPreview from "../components/BlogPreview";
import Layout from "../components/Layout";
import ProfileCard from "../components/ProfileCard";
import { Helmet } from "react-helmet";

type BlogListProps = {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          frontmatter: {
            title: string;
            description: string;
            tag: string;
            date: string;
          };
          fields: {
            slug: string;
          };
        };
      }[];
    };
  };
};

const IndexPage = ({ data }: BlogListProps) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <>
      <Helmet>
        <title>Taeseong Dev Blog</title>
      </Helmet>
      <Layout>
        <ProfileCard />
        {posts.map(({ node }) => (
          <Link
            to={`/blog${node.fields.slug}`}
            key={node.fields.slug}
            style={{ textDecoration: "none" }}
          >
            <BlogPreview
              title={node.frontmatter.title}
              description={node.frontmatter.description}
              date={node.frontmatter.date}
              tag={node.frontmatter.tag}
            />
          </Link>
        ))}
      </Layout>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/posts/" } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            tag
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
