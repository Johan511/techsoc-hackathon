const budgetRouter = require("express").Router();
const pg_pool = require("../db_connections/pg_pool");
const { user_auth } = require("../authentication/budgetAuth.js");

budgetRouter.post("/create_budget", user_auth, (req, res, next) => {
  create_budget_query = "INSERT INTO BUDGET(user_id, name) VALUES($1, $2); ";

  pg_pool.query(
    create_budget_query,
    [req.user_id, req.body.name],
    (err, result) => {
      if (err) {
        if (!res.headersSent) {
          res.status(500);
          res.send("Error creating new budget");
        }
      } else {
        if (!res.headersSent) {
          res.status(200);
          res.send("Created New Budget");
        }
      }
    }
  );
});

budgetRouter.post("/add_friend_to_sub_budget", user_auth, (req, res, next) => {
  const sub_budget_id = req.body.sub_budget_id;
  const amount_total = req.body.amount_total;
  const amount_paid = req.body.amount_paid || 0;
  const friend_id = req.body.friend_id;
  // total amount to be paid by the friend

  const sub_budget_query =
    "select sub_budget_id ,budget_id, owner_id, total_amount, paid_amount from sub_budget \
   where sub_budget_id = $1 and owner_id = $2 \
  ";

  const add_friend_query =
    "insert into sub_budget_user(sub_budget_id, user_id, amount_total, amount_paid) values($1, $2, $3, $4)";

  pg_pool.connect((err, client, release) => {
    if (err) {
      if (!res.headersSent) {
        res.status(500);
        res.send("Pool connect error");
      }
    }
    client.query(
      sub_budget_query,
      [sub_budget_id, req.user_id],
      (err, result) => {
        if (err) {
          if (!res.headersSent) {
            res.status(500);
            console.log(err);
            res.send("Error creating new budget");
          }
        } else if (result.rowCount === 0) {
          if (!res.headersSent) {
            res.status(403);
            res.send("Incorrect budget and user");
          }
        } else {
          if (!res.headersSent) {
            client.query(
              add_friend_query,
              [sub_budget_id, friend_id, amount_total, amount_paid],
              (err, result) => {
                if (err) {
                  console.log(err);
                  res.status(500);
                  res.send("Error adding friend into sub budget");
                } else {
                  if (!res.headersSent) {
                    res.status(200);
                    res.send("added friend to sub budeget ");
                  }
                }
              }
            );
          }
        }
      }
    );
    release();
  });
});

budgetRouter.post("/create_sub_budget", user_auth, (req, res, next) => {
  const budget_id = req.body.budget_id;
  const sub_budget_name = req.body.sub_budget_name;
  const total_amount = req.body.total_amount;

  const create_sub_budget_query =
    "INSERT INTO SUB_BUDGET(budget_id, name ,owner_id ,total_amount ,last_updated) VALUES ($1, $2, $3, $4 ,now())";

  pg_pool.query(
    create_sub_budget_query,
    [budget_id, sub_budget_name, req.user_id, total_amount],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500);
        res.send("Error Entering into DB");
      } else {
        if (!res.headersSent) {
          res.status(200);
          res.send("Created New Sub Budget from " + budget_id);
        }
      }
    }
  );
});

module.exports = budgetRouter;
