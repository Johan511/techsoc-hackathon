const express=  require("express")
const app = express();
const http2 = require("http2");
const gtiubfvliubgef = require("./server/config.js")
const authRouter = require("./server/routes/authentication");
const budgetRouter = require("./server/routes/budget.js");

app.use(require("body-parser").json())
app.use(require('cookie-parser')())
app.get("/", (req,res) => {
    res.send("HI");
})

app.post("/", (req,res) => {
    res.send("HI");
})


app.use('/auth', authRouter)
app.use('/budget', budgetRouter)
const http2server = http2.createServer(app);
app.listen(3001)
http2server.listen(3000);