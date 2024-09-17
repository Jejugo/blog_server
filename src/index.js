// server.js
import express from "express";
import cors from "cors";
import { authenticateToken } from "./middleware/authentication.js";
import authRoutes from "./routes/authRoutes.js";
import postsRoutes from "./routes/postsRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);
app.use("/posts", postsRoutes);

// Secure route
app.get("/api/secure-data", authenticateToken, (req, res) => {
  res.status(200).json({ message: "This is secure data", user: req.user });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
