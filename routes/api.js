const express = require('express');
const router = express.Router();

const cAccount = require('../controllers/account.js');
const cReceipt = require('../controllers/receipt.js');
const cReceiptDetails = require('../controllers/receipt_details.js');

// Switch statement to decide what to send back to the user
router.use('/', function(req, res, next) {
    const url = req.baseUrl;
    switch (url) {
        // Account API
        case "/api/account/create":
            cAccount.createAccount(req, res, next);
            break;
        case "/api/account/checkEmail":
            cAccount.checkEmailIsUnused(req, res, next);
            break;
        // Receipt API
        case "/api/receipt/create":
            cReceipt.createReceipt(req, res, next);
            break;
        case "/api/receipt/delete":
            cReceipt.deleteReceipt(req, res, next);
            break;
        case "/api/receipt/fromAccount":
            cReceipt.allReceiptsOfAnAccount(req, res, next);
            break;
        // Receipt Details API
        case "/api/receiptDetails/create":
            cReceiptDetails.createReceiptDetail(req, res, next);
            break;
        case "/api/receiptDetails/create":
            cReceiptDetails.deleteReceiptDetail(req, res, next);
            break;
        case "/api/receiptDetails/create":
            cReceiptDetails.findDetailsFromReceipt(req, res, next);
            break;
        // API Details page
        case "/api/home":
            res.send('api', {});
            break;
        // 404 Not Found
        default:
            res.status(404).jsonp({
                error: "API function not found",
                success: false,
                timestamp: Date.now()
            });
    }
});



module.exports = router;
