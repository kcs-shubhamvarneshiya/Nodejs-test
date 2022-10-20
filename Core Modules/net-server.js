var net = require('net');
require('colors');

var server = net.createServer(function(connection) { 
   console.log('client connected !'.green);
   
   connection.on('end', function() {
      console.log('client disconnected.....'.red);
   });
   
   connection.write('Hello Semicolon!\r\n'.yellow);
   connection.pipe(connection);
});

server.listen(8080, function() { 
   console.log('server is started ......'.green);
});