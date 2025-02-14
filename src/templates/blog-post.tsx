import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout>
      <main>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </main>
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
