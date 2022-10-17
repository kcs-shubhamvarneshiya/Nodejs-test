var dgram = require('dgram');
var s = dgram.createSocket('udp4');
s.send(Buffer.from('Hello Semicolon'), 8080, 'localhost');