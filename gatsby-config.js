module.exports = {
  siteMetadata: {
    title: "Gatsby Markdown Blog",
    description: "A simple blog built with Gatsby and Markdown",
    author: "@yourhandle",
  },
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`],
      },
    },
  ],
};
