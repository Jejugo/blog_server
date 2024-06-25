import { getOrInitializeDB } from "../service/mysql.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";
import { runMysqlQuery } from "../helpers/mysql.js";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const findUserWithGoogleId = (googleId, email, username) => {
  return runMysqlQuery(
    db,
    "SELECT * FROM User WHERE google_id = ? AND email = ? AND username = ?",
    [googleId, email, username]
  );
};

const generateJWT = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

export async function registerUser(email, password, username) {
  const db = getOrInitializeDB();

  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await runMysqlQuery(
      db,
      "INSERT INTO User (email, password_hash, username) VALUES (?, ?, ?)",
      [email, hashedPassword, username]
    );

    return { message: "User registered successfully" };
  } catch (error) {
    console.error(error);
    throw new Error("User registration faled");
  }
}

export async function loginUser(email, password) {
  const db = getOrInitializeDB();

  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  try {
    const results = await runMysqlQuery(
      db,
      "SELECT * FROM User WHERE email = ?",
      [email]
    );

    if (results.length === 0) {
      throw new Error("Invalid email or password");
    }

    const user = results[0];

    const isPasswordValid =
      user.password_hash &&
      (await bcrypt.compare(password, user.password_hash));

    if (!isPasswordValid) {
      throw new Error("Invalid email or password");
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return { token };
  } catch (error) {
    throw error;
  }
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

    const token = findUserWithGoogleId(googleId, email, username);

    const usersWithGoogleId = await runMysqlQuery(
      db,
      "SELECT * FROM User WHERE google_id = ?",
      [googleId]
    );

    if (usersWithGoogleId.length > 0) {
      const user = usersWithGoogleId[0];

      const jwtToken = generateJWT(user.id);

      return { token: jwtToken };
    } else {
      const newUser = { google_id: googleId, email, username };

      const insertUserResult = await runMysqlQuery(
        db,
        "INSERT INTO User SET ?",
        [newUser]
      );

      const jwtToken = generateJWT(insertUserResult.insertId);

      return { token: jwtToken };
    }
  } catch (error) {
    console.error(error);
    throw new Error("Invalid Google token");
  }
}
