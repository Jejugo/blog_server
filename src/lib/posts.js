import { recentPosts } from "../mocks/index.js";
export const getRecentPosts = (page) => {
  const size = recentPosts.length;
  let posts = [];

  if (page * 2 - 2 < size) {
    posts.push(recentPosts[page * 2 - 2]);
  }
  if (page * 2 - 1 < size) {
    posts.push(recentPosts[page * 2 - 1]);
  }

  return { posts, lastPage: Math.ceil(recentPosts.length / 2) };
};
