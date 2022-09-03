const authRouter = require("express").Router();
const jsonwebtoken = require("jsonwebtoken");
const pg_pool = require("../db_connections/pg_pool")

authRouter.post("/login", (req,res,next) =>{
    const username = req.body.username;
    const password = req.body.password;
// username is the email id


if(!username || !password){
   res.status(403);
   res.send("No Username or Password");
   return ;
}

const user_query = "select password_salt, password_hash from users where email_id = $1"

pg_pool.query(user_query, [username]);




})