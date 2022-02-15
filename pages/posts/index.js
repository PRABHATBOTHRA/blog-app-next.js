import React from "react";
import AllPost from "../../components/posts/all-posts";
import { getAllPost } from "../../lib/post-util";
/* const DUMMY_POST = [
  {
    title: "About NextJs",
    image: "getting-staretd-with-next-js.png",
    excerpt: "NextJs is a react framework for production",
    date: "2022-02-21",
    slug: "getting-staretd-with-next-js",
  },
  {
    title: "About NextJs",
    image: "getting-staretd-with-next-js.png",
    excerpt: "NextJs is a react framework for production",
    date: "2022-02-21",
    slug: "getting-staretd-with-next-js2",
  },
  {
    title: "About NextJs",
    image: "getting-staretd-with-next-js.png",
    excerpt: "NextJs is a react framework for production",
    date: "2022-02-21",
    slug: "getting-staretd-with-next-js3",
  },
  {
    title: "About NextJs",
    image: "getting-staretd-with-next-js.png",
    excerpt: "NextJs is a react framework for production",
    date: "2022-02-21",
    slug: "getting-staretd-with-next-js4",
  },
]; */
const AllPostPage = (props) => {
  return <AllPost posts={props.posts} />;
};

export function getStaticProps() {
  const allPosts = getAllPost();
  return {
    props: {
      posts: allPosts,
    },
    // revalidate: 60
  };
}
export default AllPostPage;
