var net = require('net');
require('colors');

var client = net.connect({port: 8080}, function() {
   console.log('connected to server!'.green);  
});

client.on('data', function(data) {
   console.log(data.toString());
   client.end();
});

client.on('end', function() { 
   console.log('disconnected from server'.red);
});