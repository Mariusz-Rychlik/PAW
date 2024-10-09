const express = require('express');
const router = express.Router();
let fs = require('fs');
const path=require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
    let timestamp = Date.now().toString();
    let path = '../params_'+timestamp+'.json';
    console.log(req.query);
    fs.writeFile(path, JSON.stringify(req.query), function (err) {
        if (err) {
            console.log(err);
            res.end();
        }
    })

    res.send(JSON.stringify({ok:'ok'}));
});

module.exports = router;