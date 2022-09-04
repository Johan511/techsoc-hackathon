const express = require("express");
const app = express();
const http2 = require("http2");
const gtiubfvliubgef = require("./server/config.js");
const authRouter = require("./server/routes/authentication");
const budgetRouter = require("./server/routes/budget.js");
const usersRouter = require("./server/routes/users");

app.use(require("body-parser").json());
app.use(require("cookie-parser")());
app.get("/", (req, res) => {
  res.send("HI");
});

app.post("/", (req, res) => {
  res.send("HI");
});

app.use("/auth", authRouter);
app.use("/budget", budgetRouter);
app.use("/users", usersRouter);
const http2server = http2.createServer(app);
app.listen(80);
http2server.listen(3001);
