import { posts } from "../mocks/index.js";
import { getPostsByPage } from "../lib/utils.js";
import { runMysqlQuery } from "../helpers/mysql.js";
import { getOrInitializeDB } from "../service/mysql.js";

const db = getOrInitializeDB();

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

export const getPostById = async (id) => {
  const dbPosts = await runMysqlQuery(db, `SELECT * FROM posts`);
  const post = dbPosts.find((post) => post.id === Number(id));

  return post;
};

export const createPost = (post) => {
  const db = getOrInitializeDB();

  const { title, content, author_id, catSlug: category_id } = post;
  const createdAt = new Date();
  return runMysqlQuery(
    db,
    `INSERT INTO posts (title, content, author_id, category_id, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)`,
    [title, content, author_id, category_id, createdAt, createdAt]
  );
};
