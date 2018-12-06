const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', function(socket){
  console.log('a user connected');
});

server.listen(3000, function(){
  console.log('listening on *:3000');
});
