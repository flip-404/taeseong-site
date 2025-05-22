module.exports = {
  siteMetadata: {
    title: `Taeseong Dev Blog`,
    description: `프론트엔드 개발자 태성의 기술 블로그입니다.`,
    siteUrl: `https://taeseong-site.vercel.app/`,
    author: `Taeseong`,
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "detail",
        path: `${__dirname}/content/detail`,
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
    `gatsby-plugin-react-helmet`,       // SEO 메타 태그 삽입
    `gatsby-plugin-sitemap`,            // sitemap.xml 자동 생성
    {
      resolve: `gatsby-plugin-robots-txt`, // robots.txt 생성
      options: {
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
  ],
};
