import ReactMarkdown from 'react-markdown'
import React from "react";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
const DUMMY_POST = {
  title: "About NextJs",
  image: "getting-staretd-with-next-js.png",
  excerpt: "NextJs is a react framework for production",
  date: "2022-02-21",
  slug: "getting-staretd-with-next-js",
  content: "# This is a first post",
};
const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
