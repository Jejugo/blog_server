import express from "express";
import { getRecentPosts } from "../lib/posts.js";

const router = express.Router();

// example: /posts/recents?page=2
router.get("/recents", (req, res) => {
  const { posts, lastPage } = getRecentPosts(req.query.page);

  res.status(200).json({
    message: `This is a test of page: ${req.query.page}`,
    posts: posts,
    lastPage: lastPage,
  });
  // considerando que a página seja N e queremos dois itens por página
  // utilizaremos a função (n * 2 - 2) e (n * 2 - 1) para retornar os indices de cada pagina
});

export default router;
