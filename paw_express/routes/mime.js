const express = require('express');
const router = express.Router();
let fs = require('fs');
const Curl = require('url');
let mime = require('mime-types')


router.get('/', function(req, res, next) {
    let url = Curl.parse(req.url, true).pathname;
    fs.readFile('../assets/'+url, function (err, data) {
        if (err) {
            res.setHeader('Content-Type', 'application/json');
            //console.log(err);
            if(res.status(404) ){
                res.write(JSON.stringify({error : '404 page not found'}));
            }
            res.end();
        } else {
            let mime2 = mime.lookup('../assets/'+url);
            res.setHeader('Content-Type', mime2 );
            res.write(data);
            res.end();
        }
    })
});

module.exports = router;