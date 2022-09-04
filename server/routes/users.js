const { user_auth } = require("../authentication/budgetAuth");
const pg_pool = require("../db_connections/pg_pool");
const usersRouter = require("express").Router();

usersRouter.get("/send_request/:receiver_id", user_auth, (req, res, next) => {
  const friend_query =
    "INSERT INTO FRIENDS(sender_id, receiver_id) values($1, $2)";

  pg_pool.query(
    friend_query,
    [req.user_id, req.params.receiver_id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500);
        res.send("Error Entering into DB");
      } else {
        if (!res.headersSent) {
          res.status(200);
          res.send("Sent Request to " + req.body.receiver_id);
        }
      }
    }
  );
});

usersRouter.get("/get", (req, res, next) => {});

usersRouter.get("/add_friend/:friendship_id", user_auth, (req, res, next) => {
  const accept_request =
    "update friends set receiver_accept = true where friendship_id = $1 and (receiver_id = $2 or sender_id = $2)";
  pg_pool.query(
    accept_request,
    [req.params.friendship_id, req.user_id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500);
        res.send("Error Entering into DB");
      } else {
        if (!res.headersSent) {
          res.status(200);
          res.send("Accepted Request");
        }
      }
    }
  );
});

usersRouter.get(
  "/remove_friend/:friendship_id",
  user_auth,
  (req, res, next) => {
    const remove_friend =
      "DELETE FROM friends where friendship_id = $1 and (sender_id = $2 or receiver_id = $2)";
    pg_pool.query(
      remove_friend,
      [req.params.friendship_id, req.user_id],
      (err, result) => {
        if (err || result.rowCount === 0) {
          console.log(err);
          res.status(500);
          res.send("Error Entering into DB");
        } else {
          if (!res.headersSent) {
            res.status(200);
            res.send("deleted friend");
          }
        }
      }
    );
  }
);

usersRouter.get("/me", user_auth, (req, res, next) => {
  const res_json = {};
  const me_query =
    "SELECT user_id, email_id, name, name_salt, mobile_number, profile_picture from users where user_id = $1";
  pg_pool.query(me_query, [req.user_id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500);
      res.send("Error retrieving data");
    } else {
      if (!res.headersSent) {
        res.status(200);
        res.send(result.rows);
      }
    }
  });
});

usersRouter.get("/get_friends", user_auth, (req, res, next) => {
  const getall_friend_query =
    "select distinct friends.friendship_id ,friends.sender_id ,friends.receiver_id ,\
    friends.sender_accept ,friends.receiver_accept, users.user_id, \
    users.name, users.name_salt, users.profile_picture \
    from friends  inner join users on friends.sender_id = $1 or friends.receiver_id = $1";

  pg_pool.query(getall_friend_query, [req.user_id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500);
      res.send("Error retrieving data");
    } else {
      if (!res.headersSent) {
        res.status(200);
        res.send(result.rows);
      }
    }
  });
});

module.exports = usersRouter;
