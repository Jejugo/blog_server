import admin from "firebase-admin";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { readFileSync } from "fs";

// Replace this with the actual path to your service account key file
const serviceAccountPath = resolve(process.cwd(), "serviceAccount.json");

try {
  const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, "utf8"));

  // Initialize the Firebase Admin SDK
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "blog-427204.appspot.com", // Replace with your Firebase storage bucket
  });

  console.log("Firebase Admin initialized successfully");
} catch (error) {
  console.error("Failed to initialize Firebase Admin:", error);
  process.exit(1); // Exit the application if Firebase Admin initialization fails
}

export default admin;

// ui --> backend --> firebase
