const express = require('express');
const router = express.Router();
const path = require('path');
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname,'../views/contact.html'));
});

module.exports = router;
