const dAccount = require('../database/account.js');

function createAccount(req, res, next) {
    console.log(req.body);
    let newAccount = {
        fname: req.body.fname,
        lname: req.body.lname,
        dob: req.body.dob,
        email: req.body.email,
        password: req.body.password,
        pw_confirm: req.body.pw_confirm
    };

    if (newAccount.fname === undefined || newAccount.lname === undefined || newAccount.dob === undefined ||
        newAccount.email === undefined || newAccount.password === undefined || newAccount.pw_confirm === undefined) {
        res.status(200).jsonp({
            error: "Not all values supplied",
            success: false,
            timestamp: Date.now()
        });
    }

}

exports.createAccount = createAccount;