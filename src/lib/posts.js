/**
 * saber quantos posts eu tenho
 * dependendo da pagina, eu retorno os 2 posts ou 1 post, ou falo "nao ha posts para essa pagina"
 */
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

  /* by chat gpt
  const startIndex = (page - 1) * 2;
  return recentPosts.slice(startIndex, startIndex + 2);
  */
  return posts;
};
