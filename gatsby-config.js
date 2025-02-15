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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Taeseong Dev Blog`,
        short_name: `Taeseong Dev Blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `static/favicon.png`,
      },
    },
  ],
};
