const bookshelf = require("./bookshelf.js");

const mAccount = require('./models/account.js');

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

exports.createAccount = createAccount;