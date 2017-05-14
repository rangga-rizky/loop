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



http.listen(5000, function(){
  console.log('listening on *:3000');
});