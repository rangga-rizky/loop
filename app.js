var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname +'/views/index.html');
});

app.set('port', (process.env.PORT || 5000));

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'on' });
  socket.on('off', function (data) {
    socket.emit('news', { hello: 'off' });
  });

});

/*io.on('connection', function (socket) {
  socket.broadcast.emit('user connected');
});*/



app.listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});