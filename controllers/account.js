const dAccount = require('../database/account.js');

async function createAccount(req, res, next) {
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

    let result = await dAccount.createAccount(newAccount);

    console.log(result);
    if (result === 0) {
        res.status(200).jsonp({
            account: 0,
            success: false,
            timestamp: Date.now()
        })
    } else {
        res.status(200).jsonp({
            account: result,
            success: false,
            timestamp: Date.now()
        })
    }
}

async function checkEmailIsUnused(req, res, next) {
    console.log(req.body);
    let email = req.body.email;

    if (email === undefined) {
        res.status(200).jsonp({
            error: "Not all values supplied",
            success: false,
            timestamp: Date.now()
        });
    }

    let result = await dAccount.checkEmailIsUnused(email);

    console.log(result);
    res.status(200).jsonp({
        email_used: result,
        success: false,
        timestamp: Date.now()
    })
}

exports.createAccount = createAccount;
exports.checkEmailIsUnused = checkEmailIsUnused;