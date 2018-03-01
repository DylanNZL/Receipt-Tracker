const bookshelf = require("../bookshelf.js");

const mReceipt = require('../models/receipt.js');

async function createReceipt(newReceipt) {
    return new Promise((resolve, reject) => {
        mReceipt.forge(newReceipt).save().then(function (data) {
            console.log(data.attributes);
            resolve(data.attributes);
        }).catch(function (err) {
            console.error('createReceipt error: ' + err);
            resolve(0);
        })
    })
}

async function testCreateReceipt() {
    let newReceipt = {
        account_id: 1,
        purchase_date: new Date(1/3/2018),
        shop: "TEST SHOP",
        total: 12.34,
        label: "TEST",
        photo_path: "/test/path/to/nothing"
    };

    let result = await createReceipt(newReceipt);

    console.log(result);
}

async function deleteReceipt(receiptID) {
    return new Promise((resolve, reject) => {
        new mReceipt({ id: receiptID }).destroy().then(function (data) {
            console.log(data);
            resolve(true);
        }).catch(function (err) {
            console.error('deleteReceipt error: ' + err);
            resolve(false);
        })
    })
}

async function testDeleteReceipt() {
    let receiptID = 1;
    let result = await deleteReceipt(1);

    console.log(result);
}

async function findAllReceiptsFromAccount(accountID) {
    return new Promise((resolve, reject) => {
        new mReceipt({ account_id: accountID }).fetchAll().then(function (data) {
            console.log(data.models);
            resolve(data.models);
        }).catch(function (err) {
            console.error('deleteReceipt error: ' + err);
            resolve(false);
        })
    })
}

async function testFindAllReceiptsFromAccount() {
    let accountID = 1;
    let result = await findAllReceiptsFromAccount(accountID);

    console.log(result);
}


exports.createReceipt = createReceipt;
exports.deleteReceipt = deleteReceipt;
exports.findAllReceiptsFromAccount = findAllReceiptsFromAccount;
