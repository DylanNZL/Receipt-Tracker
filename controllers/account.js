const dAccount = require('../database/account.js');
const cUtility = require('./utility.js');

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

    // Check we received all values
    let checkProperties = cUtility.checkProperties(newAccount);

    if (checkProperties !== true) {
        res.status(200).jsonp({
            error: checkProperties,
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
            success: true,
            timestamp: Date.now()
        })
    }
}

async function checkEmailIsUnused(req, res, next) {
    console.log(req.body);
    let email = req.body.email;

    if (email === undefined) {
        res.status(200).jsonp({
            error: "No email supplied",
            success: false,
            timestamp: Date.now()
        });
    }

    let result = await dAccount.checkEmailIsUnused(email);

    console.log(result);
    res.status(200).jsonp({
        email_used: result,
        success: true,
        timestamp: Date.now()
    })
}

exports.createAccount = createAccount;
exports.checkEmailIsUnused = checkEmailIsUnused;