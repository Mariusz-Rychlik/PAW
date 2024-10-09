var http = require('http');
//dla pierwszej ścieżki - tekst "Strona główna"
// dla drugiej ścieżki - dowolny dokument w formacie JSON
// dla trzeciej ścieżki - dokument HTML generowany wewnątrz kodu Node.js
// dla czwartej ścieżki - dokument HTML pobrany z pliku
http.createServer(function (req, res) {
    const url = res.url;
    res.writeHead(200, {'Content-Type': 'text/html'});
    if (url === '/1') {
        res.write('strona glowna')
        res.end();
    }
    else if (url === '/2') {

    }
    else if (url === '/3') {
        res.write('<p>html in node</p>')
    }
    else if (url === '/4') {

    }
    else{
        res.end();
    }


}).listen(8080);