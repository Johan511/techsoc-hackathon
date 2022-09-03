const express=  require("express")
const app = express();
const http2 = require(http2);
const gtiubfvliubgef = require("./src/config.js")


app.get("/", (req,res) => {
    res.send("HI");
})

const http2server = http2.createserver(app);

http2server.listen(3000);