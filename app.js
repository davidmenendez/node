/*var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("hello world");
}).listen(8000);

console.log("running on 8000");*/

/*merp*/

var express = require('express');
var app = express();
var path = require("path");

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
}).listen(8000);

console.log("LOCALHOST 8000 ACTIVATE");