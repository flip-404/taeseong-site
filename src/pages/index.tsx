import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import BlogPreview from "../components/BlogPreview";

const post = {
  title: "블로그 컴포넌트 만들기",
  description:
    "이 게시물에서는 리액트와 이모션을 사용해 블로그 게시물 미리보기 컴포넌트를 만드는 방법을 다룹니다.",
  date: "2025년 2월 13일",
  tags: ["React", "Emotion", "웹 개발"],
};

const IndexPage = () => {
  return (
    <BlogPreview
      title={post.title}
      description={post.description}
      date={post.date}
      tags={post.tags}
    />
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>🚀Taeseong Dev Blog</title>;
