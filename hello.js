
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\test66666666\n');
}).listen(8081, '172.31.16.115');
console.log('Server running at http://172.31.16.115:8081/');

#var forward = require('http-port-forward');

#// forward all local 8080 port http requests to 80 port.
#forward(8080, 80);
