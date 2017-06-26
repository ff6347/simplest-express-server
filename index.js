var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io');
var socket = io.listen(server);

var port = 3000;
app.use('/', express.static(__dirname + '/public'));
app.get('/', function(req, res) {
  res.sendfile('index.html');
});
  // now build the connection via socket
socket.on('connection', function(client) {
    // log what the client is sending
  client.on('message', function(message) {
    console.log(message);
    if(message === 'one') {
      // do some state changes here
      console.log('this is message one');
    }
    if(message === 'two') {
      // do other changes here
      console.log('this is message two');
    }
    if(message === 'three') {
      console.log('this is message three');
    }
    if(message === 'four') {
      console.log('this is message four');
    }
  });
});

// run the server
console.log('listening on port http://localhost:' + port);
server.listen(port);
