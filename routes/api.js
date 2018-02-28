const express = require('express');
const router = express.Router();

const cAccount = require('../controllers/account.js');
const cReceipt = require('../controllers/receipt.js');
const cReceiptDetails = require('../controllers/receipt_details.js');

// Switch statement to decide what to send back to the user
router.use('/', function(req, res, next) {
    const url = req.baseUrl;
    switch (url) {
        case "/api/createAccount":
            cAccount.createAccount(req, res, next);
            break;
        case "/api/home":
            res.send('api', {});
            break;
        default:
            res.status(404).jsonp({
                error: "API function not found",
                success: false,
                timestamp: Date.now()
            });
    }
});



module.exports = router;
