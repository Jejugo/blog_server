// server.js
import express from "express";
import cors from "cors";
import { authenticateToken } from "./middleware/authentication.js";
import authRoutes from "./routes/authRoutes.js";
import postsRoutes from "./routes/postsRoutes.js";
import multer from "multer";
import admin from "./firebase/index.js";

const app = express();

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);
app.use("/posts", postsRoutes);

// Secure route
app.get("/api/secure-data", authenticateToken, (req, res) => {
  res.status(200).json({ message: "This is secure data", user: req.user });
});

app.post(
  "/api/upload",
  authenticateToken,
  upload.single("file"),
  async (req, res) => {
    try {
      const file = req.file;
      const bucket = admin.storage().bucket();
      const fileName = `${Date.now()}_${file.originalname}`;
      const fileRef = bucket.file(fileName);

      const stream = fileRef.createWriteStream({
        metadata: {
          contentType: file.mimetype,
        },
      });

      stream.on("error", (err) => {
        console.error("Upload error:", err);
        res.status(500).json({ success: 0, message: "Upload error" });
      });

      stream.on("finish", async () => {
        // Optionally make the file publicly accessible
        await fileRef.makePublic();

        // Get the public URL
        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${fileRef.name}`;

        res.json({ success: 1, file: { url: publicUrl } });
      });

      stream.end(file.buffer);
    } catch (error) {
      console.error("Error during upload:", error);
      res.status(500).json({ success: 0, message: "Internal server error" });
    }
  }
);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
