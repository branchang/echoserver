var net = require('net');

var server = net.createServer(function (socket) {
  //socket.write("Echo server\r\n");
  socket.pipe(socket);
}, {'backlog': 1024})

server.listen(5000, "0.0.0.0");
