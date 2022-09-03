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

budgetRouter.post("/create_sub_budget", user_auth, (req, res, next) => {
  const budget_id = req.body.budget_id;
  const budget_name = req.body.budget_name;

  const create_sub_budget_query =
    "INSERT INTO SUB_BUDGET(budget_id, name ,owner_id \
        total_amount ,last_updated) VALUES ($1, $2, $3, now())";

  pg_pool.query(
    create_sub_budget_query,
    [budget_id, req.user_id, req.total_amount],
    (err, result) => {
      if (err) {
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
