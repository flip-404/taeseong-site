import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO" // 추가
import "prismjs/themes/prism-solarizedlight.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import {
  Content,
  CreatedAt,
  PostDetails,
  Tag,
  Tags,
  Title,
} from "../styles/post"

interface BlogPostProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        date: string
        tags: string[]
        description?: string
      }
      html: string
    }
  }
  location: {
    pathname: string
  }
}

export default function BlogPost({ data, location }: BlogPostProps) {
  const post = data.markdownRemark
  const { title, tags, date } = post.frontmatter

  return (
    <>
      <SEO
        title={`Taeseong Dev Blog | ${title}`}
        description={post.frontmatter.description || `${title}에 대한 포스트입니다.`}
        pathname={location.pathname}
      />
      <Layout>
        <PostDetails>
          <Title>{title}</Title>
          <CreatedAt>{date}</CreatedAt>
          <Tags>
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
        </PostDetails>
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    </>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        tags
        description
      }
      html
    }
  }
`
