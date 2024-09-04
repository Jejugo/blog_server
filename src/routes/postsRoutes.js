import express from "express";
import { recentPosts } from "../mocks/index.js";
import { getRecentPosts } from "../lib/posts.js";

const router = express.Router();

// example: /posts/recents?page=2
router.get("/recents", (req, res) => {
  const posts = getRecentPosts(req.query.page);

  res.status(200).json({
    message: `This is a test of page: ${req.query.page}`,
    posts: posts,
  });
  // considerando que a página seja N e queremos dois itens por página
  // utilizaremos a função (n * 2 - 2) e (n * 2 - 1) para retornar os indices de cada pagina
});

export default router;
