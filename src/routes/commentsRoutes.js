import express from "express";
import { authenticateToken } from "../middleware/authentication.js";
import { postComment, getComments } from "../lib/comments.js";

const router = express.Router();

router.post("/", authenticateToken, async (req, res) => {
  try {
    const {
      body,
      headers: { authorization },
    } = req;

    const authorizationToken = authorization.split(" ")[1];

    const response = await postComment({
      content: body.content,
      postId: body.postId,
      authorizationToken,
    });

    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});

router.get("/:postId", async (req, res) => {
  const { postId } = req.params;

  try {
    const comments = await getComments(postId);
    console.log("comments:", comments);

    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

export default router;
