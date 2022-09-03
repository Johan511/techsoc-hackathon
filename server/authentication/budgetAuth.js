const jwt = require("jsonwebtoken");

function user_auth(req,res,next){
    if(!req.cookies["jwt"]){
        res.status(401);
        res.send("Login in order to create a budget");
        return next();
    }


    jwt.verify(req.cookies["jwt"], process.env.JWT_SECRET, (err, payload ) => {
        if(err) {
            res.status(401);
            res.send("Failed to verify token, sign in again");
            return ;
        }
        else{
            req.user_id  = payload.user_id;
            next();
        }
    })

}

module.exports = {user_auth};