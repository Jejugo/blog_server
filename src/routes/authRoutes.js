import express from "express";
import passport from "passport";
import dotenv from "dotenv";
import { getOrInitializeDB } from "../service/mysql.js";
import { registerUser, loginUser, googleLogin } from "../lib/authentication.js";

dotenv.config();

const router = express.Router();

getOrInitializeDB();

// auth/register
router.post("/register", async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const response = await registerUser(email, password, username);
    res.status(201).json(response);
  } catch (error) {
    if (error.message === "Email and password are required") {
      res.status(400).json({ message: error.message, error });
    } else {
      res.status(500).json({ message: error.message, error });
    }
  }
});

// auth/login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const response = await loginUser(email, password);

    res.status(200).json(response);
  } catch (error) {
    if (
      error.message === "Email and password are required" ||
      error.message === "Invalid email or password"
    ) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
});

router.post("/google/callback", async (req, res) => {
  const { token } = req.body;

  try {
    const response = await googleLogin(token);
    res.status(200).json(response);
  } catch (error) {
    if (error.message === "Invalid Google token") {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
});

export default router;
