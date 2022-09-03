email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
mobile_number_regex = /^[6-9]{1}[0-9]{9}$/
password_regex = /^.*$/
function registerValidation(data){
    console.log(data)
    // data = [req.body.email_id,
    //     req.body.name,
    //     req.body.mobile_number,
    //     body.password]
    if(data.length != 4) {
        return false;
    }
    return data[0].match(email_regex) && data[2].match(mobile_number_regex) && data[3].match(password_regex)


}

module.exports = {registerValidation};