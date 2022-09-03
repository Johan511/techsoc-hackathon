const crypto  = require("crypto")
const bcrypt = require ('bcrypt'); // bcrypt

const saltRounds = 10; // data processing time

async function loginAuth (received_pass, password_salt, password_hash){

    bcrypt.compare(received_pass, password_hash, function(err, result) {
        if(result === true){
            return result
        }
      });

}

async function generateHash(received_pass) {
    bcrypt.hash(received_pass, saltRounds, function(err, hash) {
        let values = [hash, username]; // query values
        // store hash in database
        db.query(statement, values, function(err,res) {
          if (err) throw err;
          else {
                  console.log("stored!");
              }
        });
}
}