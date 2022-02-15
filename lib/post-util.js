import fs from 'fs';
import path from "path";
import matter from "gray-matter";
const postDirectory = path.join(process.cwd(), "posts");


export function getPostsFiles() {
  return fs.readdirSync(postDirectory);
}
export function getPostData(fileIdentifier) {
  const postSlug = fileIdentifier.replace(
    /\.md$/,
    ""
  ); /* REMOVE THE FILE EXTENSION */
  const filePath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

/* read all file from posts folder  */
export function getAllPost() {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });
  const sortedPost = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPost;
}

export function getFeaturedPost() {
  const allPosts = getAllPost();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
