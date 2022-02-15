import React from "react";
import PostContent from "../../components/posts/post-details/post-content";
import { getAllPost, getPostData, getPostsFiles } from "../../lib/post-util";

const PostDetailsPage = (props) => {
  return <PostContent post={props.post} />;
};
export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileName = getPostsFiles();
  const slugs = postFileName.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map(slug => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailsPage;
