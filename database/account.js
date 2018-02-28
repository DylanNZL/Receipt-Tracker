const bookshelf = require("../bookshelf.js");

const mAccount = require('../models/account.js');

async function createAccount(newAccount) {
    return new Promise((resolve, reject) => {
        mAccount.forge(newAccount).save().then(function (data) {
            console.log(data.attributes);
            resolve(data.attributes);
        }).catch(function (err) {
            console.error('createAccount error: ' + err);
            resolve(0);
        })
    })
}

async function testCreateAccount() {
    let newAccount = {
        fname: "test",
        lname: "test",
        dob: new Date('1/1/1995'),
        email: "test@test.test",
        password: "test"
    };

    let result = await createAccount(newAccount);

    console.log(result);
}

async function checkEmailIsUnused(email) {
    return new Promise((resolve, reject) => {
        mAccount.where('email', email).fetch().then(function (data) {
            if (data !== null) {
                console.log(data.attributes);
                resolve(false);
            }
            resolve(true);
        }).catch(function (err) {
            console.error("checkEmailIsUnused error: " + err);
            resolve(true);
        });
    })
}

async function testCheckEmailIsUnused() {
    let email1 = "test@test.test";
    let email2 = "test@test.test1";
    let result1 = await checkEmailIsUnused(email1);
    let result2 = await checkEmailIsUnused(email2);

    console.log(result1);
    console.log(result2);
}

exports.createAccount = createAccount;
exports.checkEmailIsUnused = checkEmailIsUnused;