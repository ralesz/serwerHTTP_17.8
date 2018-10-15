var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
	response.setHeader('Content-Type', 'text/html; charset=utf-8');
	if (request.method === 'GET' && request.url === '/') {
		fs.readFile('./index.html', 'utf-8', function (err, data) {
            response.write(data);
            response.end();
		});
		
	} else {
		fs.readFile('./error.jpg', function (err, img) {
        response.write('<h1>Zła ścieżka!</h1><img src="data:image/jpg;base64, '+Buffer.from(img).toString("base64")+'">');
        response.end();
		})
		
	}
})
server.listen(8080);


