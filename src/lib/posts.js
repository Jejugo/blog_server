import { posts } from "../mocks/index.js";
import { getPostsByPage } from "../lib/utils.js";

const MAX_NUMBER_OF_RECENT_POSTS = 2;
export const getRecentPosts = (page) => {
  let recentPosts = getPostsByPage({
    posts,
    page,
    limit: MAX_NUMBER_OF_RECENT_POSTS,
  });

  return { posts: recentPosts, lastPage: Math.ceil(posts.length / 2) };
};

export const getCategoryPosts = (category, page, limit) => {
  const filteredPosts = posts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
  const categoryPosts = getPostsByPage({ posts: filteredPosts, page, limit });

  return { posts: categoryPosts };
};

export const getPostById = (id) => {
  const post = posts.find((post) => post.id === Number(id));
  return post;
};
