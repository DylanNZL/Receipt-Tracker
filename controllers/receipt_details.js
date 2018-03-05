const dReceiptDetails = require("../database/receipt_details.js");
const utility = require('./utility.js');

async function createReceiptDetail(req, res, next) {
    console.log(req.body);

    let receiptDetail = {
        receipt_id: req.body.receipt_id,
        quantity: req.body.quantity,
        item: req.body.item,
        price: req.body.price
    };

    let checkProperties = utility.checkProperties(receiptDetail);

    if (checkProperties !== true) {
        res.status(200).jsonp({
            error: checkProperties,
            success: false,
            timestamp: Date.now()
        });
    }

    let result = dReceiptDetails.createReceiptDetail(receiptDetail);

    if (result === 0) {
        res.status(200).jsonp({
            receiptDetail: 0,
            success: false,
            timestamp: Date.now()
        })
    } else {
        res.status(200).jsonp({
            receiptDetail: result,
            success: true,
            timestamp: Date.now()
        })
    }
}

async function deleteReceiptDetail(req, res, next) {
    let receiptDetailID = req.body.receipt_detail_id;

    if (receiptDetailID === undefined) {
        res.status(200).jsonp({
            error: "No receipt details id supplied",
            success: false,
            timestamp: Date.now()
        })
    }

    let result = dReceiptDetails.deleteReceiptDetail(receiptDetailID);

    if (result === 0) {
        res.status(200).jsonp({
            deleted: false,
            success: false,
            timestamp: Date.now()
        })
    } else {
        res.status(200).jsonp({
            deleted: receiptDetailID,
            success: true,
            timestamp: Date.now()
        })
    }
}

async function findDetailsFromReceipt(req, res, next) {
    let receiptID = req.body.receipt_id;

    if (receiptID === undefined) {
        res.status(200).jsonp({
            error: "No receipt id supplied",
            success: false,
            timestamp: Date.now()
        })
    }

    let result = dReceiptDetails.findReceiptDetailsFromReceipt(receiptID);

    if (result === 0) {
        res.status(200).jsonp({
            receiptDetails: 0,
            success: false,
            timestamp: Date.now()
        })
    } else {
        res.status(200).jsonp({
            receiptDetails: result,
            success: true,
            timestamp: Date.now()
        })
    }
}

exports.createReceiptDetail = createReceiptDetail;
exports.deleteReceiptDetail = deleteReceiptDetail;
exports.findDetailsFromReceipt = findDetailsFromReceipt;