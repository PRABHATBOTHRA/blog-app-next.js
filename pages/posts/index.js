import React from "react";
import AllPost from "../../components/posts/all-posts";
const DUMMY_POST = [
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
];
const AllPostPage = () => {
  return <AllPost posts={DUMMY_POST} />;
};

export default AllPostPage;
