const { user_auth } = require("../authentication/budgetAuth");
const pg_pool = require("../db_connections/pg_pool");
const usersRouter = require("express").Router();

usersRouter.post("/add_friend", (req, res, next) => {
  const friend_query =
    "INSERT INTO FRIENDS(sender_id, receiver_id) values($1, $2)";

  pg_pool.query(
    friend_query,
    [req.body.user_id, req.body.receiver_id],
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

usersRouter.get("/add_friend/:friendship_id", (req, res, next) => {
  const accept_request =
    "update friends set receiver_accept = true where friendship_id = $1";
  pg_pool.query(accept_request, [req.params.friendship_id], (err, result) => {
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
  });
});

usersRouter.get("/remove_friend/:friendship_id", (req, res, next) => {
  const remove_friend = "DELETE FROM friends where friendship_id = $1";
  pg_pool.query(remove_friend, [req.params.friendship_id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500);
      res.send("Error Entering into DB");
    } else {
      if (!res.headersSent) {
        res.status(200);
        res.send("deleted friend");
      }
    }
  });
});

usersRouter.get("/get_friends", user_auth, (req, res, next) => {
  const getall_friend_query =
    "select friends.friendship_id ,friends.sender_id ,friends.receiver_id ,\
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
        result;
      }
    }
  });
});

module.exports = usersRouter;
