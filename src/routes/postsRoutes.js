import express from "express";
import { getRecentPosts, getCategoryPosts, getPostById } from "../lib/posts.js";

const router = express.Router();

// example: /posts/recents?page=2
router.get("/recents", (req, res) => {
  const { posts, lastPage } = getRecentPosts(req.query.page);

  res.status(200).json({
    message: `This is a test of page: ${req.query.page}`,
    posts: posts,
    lastPage: lastPage,
  });
});

// example: /posts?category=Travel&page=1&limit=10
router.get("/", (req, res) => {
  const { posts } = getCategoryPosts(
    req.query.category,
    Number(req.query.page),
    Number(req.query.limit) || 2
  );

  res.status(200).json({
    message: `This is a test of category: ${req.query.category}`,
    posts: posts,
  });
});

router.get("/:id", (req, res) => {
  const post = getPostById(req.params.id);

  res.status(200).json({ post });
});

export default router;
