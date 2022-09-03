const crypto  = require("crypto")
const bcrypt = require ('bcrypt'); // bcrypt

const saltRounds = 10; // data processing time

async function loginAuth (received_pass, password_hash){

    const same = await bcrypt.compare(received_pass, password_hash).catch((err) => console.log(err));
    console.log(same)
return same;
}

async function generateHash(received_pass) {
    hash = await bcrypt.hash(received_pass,10)
    return hash;
}

module.exports = {loginAuth, generateHash};
