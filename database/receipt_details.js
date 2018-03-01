const bookshelf = require("../bookshelf.js");

const mReceiptDetails = require('../models/receipt_details.js');

async function createReceiptDetail(newReceipt) {
    return new Promise((resolve, reject) => {
        mReceiptDetails.forge(newReceipt).save().then(function (data) {
            console.log(data.attributes);
            resolve(data.attributes);
        }).catch(function (err) {
            console.error('createReceipt error: ' + err);
            resolve(0);
        })
    })
}

async function testCreateReceiptDetail() {
    let newReceipt = {
        receipt_id: 1,
        quantity: 12,
        item: "Test Item",
        price: 12.34
    };

    let result = await createReceiptDetail(newReceipt);

    console.log(result);
}

async function deleteReceiptDetail(receiptID) {
    return new Promise((resolve, reject) => {
        new mReceiptDetails({ id: receiptID }).destroy().then(function (data) {
            console.log(data);
            resolve(true);
        }).catch(function (err) {
            console.error('deleteReceipt error: ' + err);
            resolve(false);
        })
    })
}

async function testDeleteReceiptDetail() {
    let result = await deleteReceiptDetail(1);

    console.log(result);
}

async function findReceiptDetailsFromReceipt(receiptID) {
    return new Promise((resolve, reject) => {
        new mReceiptDetails({ receipt_id: receiptID }).fetchAll().then(function (data) {
            console.log(data.models);
            resolve(data.models);
        }).catch(function (err) {
            console.error('deleteReceipt error: ' + err);
            resolve(false);
        })
    })
}

async function testFindReceiptDetailsFromReceipt() {
    let result = await findReceiptDetailsFromReceipt(1);

    console.log(result);
}

exports.createReceiptDetail = createReceiptDetail;
exports.deleteReceiptDetail = deleteReceiptDetail;
exports.findReceiptDetailsFromReceipt = findReceiptDetailsFromReceipt;
