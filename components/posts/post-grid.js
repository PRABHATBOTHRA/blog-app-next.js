import React from "react";
import className from "./posts-grid.module.css";
import PostItem from "./post-item";

const PostGrid = (props) => {
  const { posts } = props;
  console.log(posts)
  return (
    <ul className={className.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostGrid;
