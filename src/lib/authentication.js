import { getOrInitializeDB } from "../service/mysql.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";
import { runMysqlQuery } from "../helpers/mysql.js";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const USERS_TABLE = "users";

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

  try {
    const results = await runMysqlQuery(
      db,
      `SELECT * FROM ${USERS_TABLE} WHERE email = ?`,
      [email]
    );

    if (results.length) throw new Error("Email already exists");

    const hashedPassword = await bcrypt.hash(password, 10);

    await runMysqlQuery(
      db,
      `INSERT INTO ${USERS_TABLE} (email, password_hash, username) VALUES (?, ?, ?)`,
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
      `SELECT * FROM ${USERS_TABLE} WHERE email = ?`,
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

    return { token, email };
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

    const { sub: googleId, email, name: username } = payload;

    const usersWithGoogleId = await runMysqlQuery(
      db,
      `SELECT * FROM ${USERS_TABLE} WHERE google_id = ?`,
      [googleId]
    );

    if (usersWithGoogleId.length > 0) {
      const user = usersWithGoogleId[0];

      const jwtToken = generateJWT(user.id);

      return { token: jwtToken, email, username };
    } else {
      const newUser = { google_id: googleId, email, username };

      const insertUserResult = await runMysqlQuery(
        db,
        `INSERT INTO ${USERS_TABLE} SET ?`,
        [newUser]
      );

      const jwtToken = generateJWT(insertUserResult.insertId);

      return { token: jwtToken, email, username };
    }
  } catch (error) {
    console.error(error);
    throw new Error(error.sqlMessage || error.message);
  }
}
