const crypto  = require("crypto")
const bcrypt = require ('bcrypt'); // bcrypt

const saltRounds = 10; // data processing time

async function loginAuth (received_pass, password_salt, password_hash){

    bcrypt.compare(received_pass, password_hash, function(err, result) {
        if(result === true){
            return result
        }
      });
      return false;

}

async function generateHash(received_pass) {
    hash = await bcrypt.hash(received_pass,10)
    return hash;
}

module.exports = {loginAuth, generateHash};
