var express = require('express'),
         io = require('socket.io');

var app = express()
  , server = require('http').createServer(app)
  , io = io.listen(server);

server.listen(3000);

io.sockets.on('connection', function (socket) {
  // message from client
  socket.on('say', function(data) {
    // broadcast to others
    socket.broadcast.json.send({msg: data.msg});
  });
});