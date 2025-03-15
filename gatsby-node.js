const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    let slug;

    if (node.fileAbsolutePath.includes("/content/posts")) {
      slug = createFilePath({ node, getNode, basePath: "content/posts" });
      createNodeField({
        node,
        name: "slug",
        value: `/blog${slug}`, // 슬러그를 /blog로 시작하도록 설정
      });
    }

    if (node.fileAbsolutePath.includes("/content/detail")) {
      slug = createFilePath({ node, getNode, basePath: "content/detail" });
      createNodeField({
        node,
        name: "slug",
        value: `/detail${slug}`, // 슬러그를 /detail로 시작하도록 설정
      });
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`);
  const detailPostTemplate = path.resolve(`src/templates/detail-post.tsx`);

  // posts 폴더의 마크다운 파일에 대해 페이지 생성
  const blogResult = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/posts/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  blogResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: node.fields.slug,
      },
    });
  });

  const detailResult = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/detail/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  detailResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: detailPostTemplate,
      context: {
        slug: node.fields.slug,
      },
    });
  });
};
