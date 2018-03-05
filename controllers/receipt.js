const dReceipt = require('../database/receipt.js');
const cUtility = require('utility.js');

// TODO Check they are logged in and allowed to access these

async function createReceipt(req, res, next) {
    console.log(req.body);

    let receipt = {
        account_id: req.account_id,
        purchase_date: req.body.purchase_date,
        shop: req.body.shop,
        total: req.body.total,
        label: req.body.label,
        photo_path: "NOT_UPLOADED"
    };

    // Check we received all values
    let checkProperties = cUtility.checkProperties(receipt);

    if (checkProperties !== true) {
        res.status(200).jsonp({
            error: checkProperties,
            success: false,
            timestamp: Date.now()
        });
    }

    let result = dReceipt.createReceipt(receipt);

    console.log(receipt);

    if (result === 0) {
        res.status(200).jsonp({
            receipt: receipt,
            success: false,
            timestamp: Date.now()
        })
    } else {
        res.status(200).jsonp({
            receipt: receipt,
            success: true,
            timestamp: Date.now()
        })
    }
}

async function deleteReceipt(req, res, next) {
    console.log(req.body);

    let receiptID = req.body.receipt_id;

    if (receiptID === undefined) {
        res.status(200).jsonp({
            error: "No receipt supplied",
            success: false,
            timestamp: Date.now()
        });
    }

    let result = dReceipt.deleteReceipt(receiptID);

    if (result === 0) {
        res.status(200).jsonp({
            deleted: false,
            success: false,
            timestamp: Date.now()
        })
    } else {
        res.status(200).jsonp({
            deleted: true,
            success: true,
            timestamp: Date.now()
        })
    }
}


async function allReceiptsOfAnAccount(req, res, next) {
    console.log(req.body);

    let accountID = req.body.account_id;

    if (accountID === undefined) {
        res.status(200).jsonp({
            receipts: 0,
            success: false,
            error: "No account id passed",
            timestamp: Date.now()
        });
    }

    let result = dReceipt.findAllReceiptsFromAccount(accountID);

    if (result === 0) {
        res.status(200).jsonp({
            receipts: 0,
            success: false,
            error: "Invalid account id",
            timestamp: Date.now()
        })
    } else {
        res.status(200).jsonp({
            receipts: result,
            success: true,
            timestamp: Date.now()
        })
    }
}

exports.createReceipt = createReceipt;
exports.deleteReceipt = deleteReceipt;
exports.allReceiptsOfAnAccount = allReceiptsOfAnAccount;