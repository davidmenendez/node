/*var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("hello world");
}).listen(8000);

console.log("running on 8000");*/

/*merp*/

var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World');
}).listen(8000);

console.log("LOCALHOST 8000 ACTIVATE");