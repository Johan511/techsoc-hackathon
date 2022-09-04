const authRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const pg_pool = require("../db_connections/pg_pool");
const { loginAuth, generateHash } = require("../authentication/userAuth");
const { registerValidation } = require("../validation/registerValidation");

authRouter.post("/login", async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  // username is the email id

  if (!username || !password) {
    res.status(403);
    if (!res.headersSent) {
      res.send("No Username or Password");
    }
    return;
  }

  const user_query =
    "select password_salt, password_hash, user_id from users where email_id = $1";

  const data = await pg_pool.query(user_query, [username]);
  const auth = await loginAuth(password, data.rows[0].password_hash);
  if (auth === true) {
    let payload = {};
    payload.username = username;
    payload.user_id = data.rows[0]["user_id"];

    const token = jwt.sign(payload, process.env.JWT_SECRET);
    console.log(JSON.stringify(token).split('"'));
    res.cookie("jwt", JSON.stringify(token).split('"')[1], { httpOnly: true });
    res.status(200);
    if (!res.headersSent) {
      res.send("Authenticated");
    }
  } else {
    res.status(401);
    if (!res.headersSent) {
      res.send("Incorrect username-password");
    }
  }
});

authRouter.post("/", (req, res, next) => {
  if (!res.headersSent) {
    res.send("hi");
  }
});

authRouter.post("/register", async (req, res, next) => {
  const hash = await generateHash(req.body.password);
  const data = [req.body.email_id, req.body.name, req.body.mobile_number, hash];

  if (!registerValidation(data)) {
    res.status(400);
    if (!res.headersSent) {
      res.send("Invalid Data");
    }
    return;
  }

  const register_query =
    "INSERT INTO USERS(email_id, name, mobile_number, \
        password_hash) values ($1, $2, $3, $4)";

  const db_reply = await pg_pool.query(register_query, data).catch((err) => {
    // check errror code while replying
    res.status(500);
    if (!res.headersSent) {
      res.send("Duplicate email_id");
    }
    return;
  });

  if (db_reply) {
    res.status(200);
    if (!res.headersSent) {
      res.send("Registered");
    }
    return;
  } else {
    res.status(500);
    if (!res.headersSent) {
      res.send("error while registering");
    }
    return;
  }
});

module.exports = authRouter;
