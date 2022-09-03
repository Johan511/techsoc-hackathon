const express=  require("express")
const app = express();
const http2 = require("http2");
const gtiubfvliubgef = require("./src/config.js")
const authRouter = require("./src/routes/authentication")

app.get("/", (req,res) => {
    res.send("HI");
})

app.get('/auth', authRouter)

const http2server = http2.createServer(app);

http2server.listen(3000);