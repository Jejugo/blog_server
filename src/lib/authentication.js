import { getOrInitializeDB } from "../service/mysql.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export async function registerUser(email, password, username) {
  const db = getOrInitializeDB();

  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO User (email, password_hash, username) VALUES (?, ?, ?)",
      [email, hashedPassword, username],
      (err, result) => {
        if (err) {
          return reject({
            message: "User registration failed",
            errorMessage: err,
          });
        }
        resolve({ message: "User registered successfully" });
      }
    );
  });
}

export async function loginUser(email, password) {
  const db = getOrInitializeDB();

  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM User WHERE email = ?",
      [email],
      async (err, results) => {
        if (err) {
          return reject(new Error("Internal server error"));
        }

        if (results.length === 0) {
          return reject(new Error("Invalid email or password"));
        }

        const user = results[0];

        const isPasswordValid =
          user.password_hash &&
          (await bcrypt.compare(password, user.password_hash));

        if (!isPasswordValid) {
          return reject(new Error("Invalid email or password"));
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });

        resolve({ token });
      }
    );
  });
}

export async function googleLogin(token) {
  try {
    const db = getOrInitializeDB();

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const googleId = payload.sub;
    const email = payload.email;
    const username = payload.name;

    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM User WHERE google_id = ?",
        [googleId],
        (err, results) => {
          if (err) {
            return reject(new Error("Internal server error"));
          }

          if (results.length > 0) {
            const user = results[0];
            const jwtToken = jwt.sign(
              { userId: user.id },
              process.env.JWT_SECRET,
              {
                expiresIn: "1h",
              }
            );
            resolve({ token: jwtToken });
          } else {
            const newUser = { google_id: googleId, email, username };
            db.query("INSERT INTO User SET ?", newUser, (err, result) => {
              if (err) {
                return reject(new Error("User registration failed"));
              }
              const jwtToken = jwt.sign(
                { userId: result.insertId },
                process.env.JWT_SECRET,
                {
                  expiresIn: "1h",
                }
              );
              resolve({ token: jwtToken });
            });
          }
        }
      );
    });
  } catch (error) {
    console.log(error);
    throw new Error("Invalid Google token");
  }
}
