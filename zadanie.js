const http = require('http');
const fs = require('fs');
const Curl = require('url');

http.createServer(function (req, res) {
    var url = Curl.parse(req.url, true).pathname;
    if (url === '/1') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('strona glowna')
        res.end();
    }
    else if (url === '/2') {
        fs.readFile('./package.json', function (err, data) {
            if (err) {
                res.setHeader('Content-Type', 'application/json');
                console.log(err);
                res.end
            }
            else{
                res.write(data);
                res.end();
            }
        })
    }
    else if (url === '/3') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<p>html in node</p>')
    }
    else if (url === '/4') {
        fs.readFile('./index.html', function (err, data) {
            if (err) {
                console.log(err);
                res.end();
            }
            else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data)
                res.end();
            }
        })
    }
    else if (url === '/get_params') {
        res.setHeader('Content-Type', 'application/json');
        var query = Curl.parse(req.url,true).query;
        var text1 = query.text1;
        var text2 = query.text2;
        console.log(text1);
        console.log(text2);
        var timestamp = Date.now().toString();
        var obj = {
            [text1] : text2
        };
        var path = 'params_'+timestamp+'.json';
        fs.writeFile(path, JSON.stringify(obj), function (err) {
            if (err) {
                console.log(err);
                res.end();
            }

        })
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({ ok: 'ok' }));
        res.end();
        }

    else{
        res.end();
    }


}).listen(8080);