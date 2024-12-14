import { runMysqlQuery } from "../helpers/mysql.js";
import { getOrInitializeDB } from "../service/mysql.js";
import { jwtDecode } from "jwt-decode";

const db = getOrInitializeDB();

export const postComment = async ({ content, postId, authorizationToken }) => {
  const createdAt = new Date();

  const { userId } = jwtDecode(authorizationToken);

  const [response] = await runMysqlQuery(
    db,
    `SELECT username FROM users WHERE id = ${userId}`,
    []
  );

  await runMysqlQuery(
    db,
    `INSERT INTO comments (post_id, content, user_id, created_at) VALUES (?, ?, ?, ?)`,
    [postId, content, userId, createdAt]
  );

  return {
    author: response.username,
    content,
  };
};

export const getComments = async (postId) => {
  const response = await runMysqlQuery(
    db,
    `SELECT * FROM comments c, users u WHERE c.post_id = ${postId} AND c.user_id = u.id;`,
    []
  );

  return response.map((comment) => ({
    text: comment.content,
    author: comment.username,
  }));
};
