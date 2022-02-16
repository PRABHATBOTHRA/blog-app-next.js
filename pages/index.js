import { React, Fragment } from "react";
import FeaturedPosts from "../components/homp-page/featured-posts";
import Hero from "../components/homp-page/hero";
import { getFeaturedPost } from "../lib/post-util";
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
const HomePage = (props) => {
  return (
    <Fragment>
    <Head>
      <title>Prabhat Blog</title>
      <meta
        name='description'
        content='I post about programming and web development.'
      />
    </Head>
    <Hero />
    <FeaturedPosts posts={props.posts} />
  </Fragment>
  );
};
export function getStaticProps()
{
    const featuredPosts=getFeaturedPost();
    return {
        props:{
            posts: featuredPosts
        },
        // revalidate: 60
    }

}
export default HomePage;
