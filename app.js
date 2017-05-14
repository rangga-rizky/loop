var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname +'/views/index.html');
});


io.on('connection', function (socket) {
  socket.emit('news', { hello: 'on' });
  socket.on('off', function (data) {
    socket.emit('news', { hello: 'off' });
  });

});

/*io.on('connection', function (socket) {
  socket.broadcast.emit('user connected');
});*/

http.listen(0, '0.0.0.0', () => {
  console.log('Node.js app is running...');
});

/*
http.listen(3000, function(){
  console.log('listening on *:3000');
});*/