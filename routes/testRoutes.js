/**
 * This file renders the test pages made to test the back end functionality before I build the vue.js front end
 */
const express = require('express');
const router = express.Router();

// Switch statement to decide what to send back to the user
router.get('/', function(req, res, next) {
    const url = req.baseUrl;
    switch (url) {
        case "/test/createAccount":
            res.render('createAccount', {});
            break;
        default:
            res.render('index', {});
    }
});

module.exports = router;
