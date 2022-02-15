import ReactMarkdown from "react-markdown";
import React from "react";
import Image from "next/image";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
/* const DUMMY_POST = {
  title: "About NextJs",
  image: "getting-staretd-with-next-js.png",
  excerpt: "NextJs is a react framework for production",
  date: "2022-02-21",
  slug: "getting-staretd-with-next-js",
  content: "# This is a first post",
}; */
const PostContent = (props) => {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const customRenders = {
    /*   image(image) {
      return (
        <Image src={`/images/posts/${post.slug}/${image.src}`} alt={image.alt} width={600} height={300}/>
      )
    },
 */
    paragraph(paragraph) {
      const { node } = paragraph;
      if (node.children[0].type === "image") {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.url}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { language, value } = code;
      return <SyntaxHighlighter style={atomDark} language={language} children={value} />;
    },
  };
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown renderers={customRenders}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
