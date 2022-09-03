const authRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const pg_pool = require("../db_connections/pg_pool")
const {loginAuth, generateHash} = require("../authentication/userAuth")
const {registerValidation} = require("../validation/registerValidation")

authRouter.post("/login", async (req,res,next) =>{
    const username = req.body.username;
    const password = req.body.password;
// username is the email id


if(!username || !password){
   res.status(403);
   res.send("No Username or Password");
   return ;
}

const user_query = "select password_salt, password_hash from users where email_id = $1"

const data = await pg_pool.query(user_query, [username]);
const auth  = loginAuth(password, data.rows[0].password_hash);
if(auth === true){
    let payload = {}
    payload.username = username;

    const token = jwt.sign(payload, process.env.JWT_SECRET)
    res.cookie("jwt", JSON.stringify(token));
    res.status(200);
    res.send("Authenticated")
}
else{
    res.status(401);
    res.send("Incorrect username-password")
}


})

authRouter.post("/register", async (req,res,next) => {
    const hash = await generateHash(req.body.password);
    const data = [req.body.email_id,
        req.body.name,
        req.body.mobile_number,
        hash]

    if(!registerValidation(data)){
        res.status(400);
        res.send("Invalid Data");
        return;
    }

    const register_query = "INSERT INTO USERS(email_id, name, mobile_number, \
        password_hash) values ($1, $2, $3, $4)"

    const db_reply = await pg_pool.query(register_query, data).catch((err) => {
        res.status(500);
        res.send("Error while entering into DB")
        return;
    });

        if(db_reply){
            res.status(200);
            res.send("Registered")
            return;
        }
        else{
            res.status(500);
            res.send("error while registering")
            return;
        }



    
})

module.exports = authRouter