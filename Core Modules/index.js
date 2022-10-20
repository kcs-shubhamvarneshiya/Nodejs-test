const fstest = require('./module.js');
const fs = require('fs');  // Node js File system
const http = require('http'); // http 
const assert = require('assert'); // assert for testing
const { deepEqual } = require('assert');
var querystring = require('querystring');
const crypto = require('crypto');
var dgram = require('dgram');
var https = require('https');
require('colors');
const prompt = require('prompt-sync')({ sigint: true });
var dns = require('dns');
var url = require('url');
const cluster = require('cluster');
const events = require('events');
const os = require('os');
const virtualMachine = require('vm');
const tls = require('tls');
const path = require('path');
const readline = require('readline');
const net = require('net');
var StringDecoder = require('string_decoder').StringDecoder;
var zlib = require('zlib');
var util = require('util');


var logger = console.log

logger("*****************************".rainbow);
logger("Press 1 for file system".yellow);
logger("Press 2 for assert Module".yellow);
logger("Press 3 for http Module".yellow);
logger("Press 4 for crypto Module ".yellow);
logger("Press 5 for buffer Module".yellow);
logger("Press 6 for https Module".yellow);
logger("Press 7 for datagram Module".yellow);
logger("Press 8 for Color Module".yellow);
logger("Press 9 for Custom Module".yellow);
logger("Press 10 for dns Module".yellow);
logger("Press 11 for console command".yellow);
logger("Press 12 for url Module".yellow);
logger("Press 13 for cluster Module".yellow);
logger("Press 14 for Events ".yellow);
logger("Press 15 for Os Module".yellow);
logger("Press 16 for vm Module".yellow);
logger("Press 17 for TLS ".yellow);
logger("Press 18 for path".yellow);
logger("Press 19 for QueryString Module".yellow);
logger("Press 20 for Readline Module".yellow);
logger("Press 21 for net Module".yellow);
logger("Press 22 for String Decoder".yellow);
logger("Press 23 for zlib".yellow);
logger("Press 24 for Timer".yellow);
logger("Press 25 for http2 Module".yellow);
logger("Press 26 for Util Module".yellow);
logger("Press 0 for Exit".yellow);
logger("*****************************".rainbow)

var num = prompt('Enter Your Choice : ');

switch (Number(num)) {
    case 1:
        fileSystem();
        break;

    case 2:
        assertTest();
        break;

    case 3:
        httpModule();
        break;

    case 4:
        cryptoTest();
        break;

    case 5:
        bufferTest();
        break;

    case 6:
        httpsTest();
        break;

    case 7:
        datagramTest();
        break;

    case 8:
        myColor();
        break;

    case 9:
        myModule();
        break;

    case 10:
        dnsTest();
        break;

    case 11:
        consoleTest();
        break;

    case 12:
        urlTest();
        break;

    case 13:
        clustreTest();
        break;

    case 14:
        eventTest();
        break;

    case 15:
        osTest();
        break;

    case 16:
        vmTest();
        break;

    case 17:
        tlsTest();
        break;

    case 18:
        pathTest();
        break;

    case 19:
        quryStringTest();
        break;

    case 20:
        readlineTest();
        break;

    case 21:
        netTest();
        break;

    case 22:
        StringDecoderTest();
        break;

    case 23:
        zlibTest();
        break;

    case 24:
        timerTest();
        break;

    case 25:
        http2Test();
        break;

    case 26:
        utilTest();
        break;

    case 0:
        console.log('Terminated!')
        loop = false;
        break;

    default:
        console.log("Invalid Choice");
        break;
}

function fileSystem() {
    console.log('file System called ');

    console.log('Create one file and write content on that file using `writeFileSync()`');
    var content = prompt('What you want to write on file : ');
    fs.writeFileSync("readme.txt", content);

    //To append content into existing file
    fs.appendFileSync('readme.txt', 'I am testing another one');

    //To Delete the file
    fs.unlink('./readme.txt', (error) => {
        if (error) {
            console.log(new Error(error.message))
        }
        else {
            console.log('File Deleted !!')
        }
    })

    // fs.mkdir(path.join(__dirname, 'semi', (err) => {
    //     if (err) {
    //         return console.error(err);
    //     }
    //     console.log('Directory created successfully!');
    // }))

}

function httpModule() {
    const PORT = 3030;

    http.createServer((req, res) => {
        res.write('hureey ! Semicolon is fly over on server !')
        res.end();
    }).listen(PORT, () => {
        console.log('Server is started ! click on this link -> ' + `http://localhost:${PORT}`);
    })
}

function myModule() {
    console.log('my name is : ' + fstest.name.fname + " " + fstest.name.lname);
    console.log('quotes of the day :) ' + fstest.quotes);
}

function myColor() {
    console.log('Semicolon in yellow'.yellow);
    console.log('Semicolon in blue'.blue);
    console.log('Semicolon is'.grey + ' unbeatable :) '.red);
}

function assertTest() {
    try {
        deepEqual(5, 6);
        assert(7 < 5);
    }
    catch (err) {
        console.log(err.message);
    }

}

function cryptoTest() {
    var password = '#@Shubham45'
    var key = crypto.createHash('sha256', password).update('shubham').digest('hex');
    console.log('The plain text was : ' + password);
    console.log('cypher text is : ' + key);

}

function bufferTest() {
    var buf = Buffer.alloc(15)
    buf.fill('b', 4, 7);
    //var buf = Buffer.allocUnsafe(12)
    console.log(buf);

    var buf1 = Buffer.from('1');
    var buf2 = Buffer.from('2');
    var x = Buffer.compare(buf1, buf2);
    console.log(x);

    /**
     * compare() return 
     * 0 if buffer match
     * 1 if buffer 1 is higher than buffer 2
     * -1 if buffer 1 is lower than buffer 2
     */

    var buf1 = Buffer.from('shubham');
    var buf2 = Buffer.from('HELLO');

    buf2.copy(buf1, 2);

    console.log(buf1.toString())
}

function datagramTest() {
    var s = dgram.createSocket('udp4');
    s.on('message', function (msg, rinfo) {
        console.log('Received message: ' + msg.toString());
        console.log(rinfo);
    });
    s.bind(8080);
}

function httpsTest() {
    const PORT = 8888;

    var server = https.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('hureey ! Semicolon is fly over on sequre server !')
        res.end();
    }).listen(PORT, () => {
        console.log('Server is started ! click on this link -> ' + `http://localhost:${PORT}`);
    })
    return server.getConnections();

}

function dnsTest() {
    var domain = prompt('Enter Any Domain name : ')
    dns.lookup(domain, (err, addresses) => {
        if (err) {
            console.log(err.message);
        }
        else
            console.log("IP Address : " + addresses);

    })
}

function consoleTest() {

    console.log('this is Simple log()');
    console.error(new Error('Opps !! Not Reachable '.red));
    console.warn('Alert ! You will lost your data '.red);
    // console.clear();
    console.count('Semicolon Counter :'.green);
    console.table([{ 'header 1': 1, 'header 2': 'shubham' }, { 'header 1': 2, 'header 2': 'semicolon' }])

    console.time('Time taken by forloop for iterate 0 to 10000');
    for (var i = 0; i < 10000; i++) {
        continue
    }
    console.timeEnd('Time taken by forloop for iterate 0 to 10000');
    console.count('Semicolon Counter :'.green);

    console.trace('show me the error trace'.cyan.bold)

}

function urlTest() {
    console.log('Hello im called !!');
    http.createServer(function (req, res) {

        //var queryString = url.parse(req.url, true);

        var queryString = new URL('https://test.instamojo.com/dashboard')

        console.log(queryString.host);
        console.log(queryString.hostname);
        console.log(queryString.port);
        console.log(queryString.auth);
        console.log(queryString.pathname);
        console.log(queryString.protocol);
        console.log(queryString.search);

        res.write("Host is : " + queryString.host + " Host Name is : " + queryString.hostname + " Port No is : " + queryString.port + " Auth is  : " + queryString.auth + " Path Name is  : " + queryString.pathname + " Protocol is : " + queryString.protocol);
        res.end();
    }).listen(4200);

}

function clustreTest() {

    if (cluster.isWorker) {
        console.log('Yes i am worker')
    }
    else {
        console.log('No i am master');
        cluster.fork();
        cluster.fork();
    }
}

function eventTest() {
    var eventEmitter = new events.EventEmitter();

    eventEmitter.on('event', () => {
        console.log('1st event fired !');
    });

    eventEmitter.on('event', () => {
        console.log('2nd event fired !');
    });

    eventEmitter.on('event', () => {
        console.log('3rd event fired !');
    })

    eventEmitter.on('success', (code) => {
        console.log(`successfully completed ! status code is ${code}`);
    })

    eventEmitter.emit('event');
    eventEmitter.emit('success', 200);
}

function osTest() {


    var free_memory = os.freemem();
    var free_mem_in_kb = free_memory / 1024;
    var free_mem_in_mb = free_mem_in_kb / 1024;
    var free_mem_in_gb = free_mem_in_mb / 1024;


    console.log("Platform : ".yellow + os.platform());
    console.log("Architecture : ".yellow + os.arch());
    console.log("Cpu : ".yellow + os.cpus().length);
    console.log("host Name : ".yellow + os.hostname());
    console.log("Free Memory in GB : ".yellow + Math.floor(free_mem_in_gb));
    console.log("User Info : ".yellow + os.userInfo('utf'));
    console.log("Network Interface : ".yellow + os.networkInterfaces());
    console.log("Operating System's Release : ".yellow + os.release());
    console.log("Operating System Version : ".yellow + os.version());
    console.log("Operating System ".yellow + os.type());


}

function vmTest() {
    var tokenSess = {
        username: "shubhankcs",
        age: 23
    };
    virtualMachine.createContext(tokenSess);
    virtualMachine.runInContext('age += 1;', tokenSess);
    console.log(tokenSess);
}

function tlsTest() {


    // Port and host address for server	
    PORT = 1337,
        HOST = '127.0.0.1',
        value = null;

    // Private key and public certificate for access
    var options = {
        key: fs.readFileSync('private-key.pem'),
        cert: fs.readFileSync('public-cert.pem'),
        rejectUnauthorized: false
    };

    // Creating and initializing server
    var server = tls.createServer(options, function (socket) {

        // Print the data that we received
        socket.on('data', function (data) {
            console.log('\nReceived: %s ',
                data.toString().replace(/(\n)/gm, ""));
        });

        // Stopping the server
        // by using the close() method
        server.close(() => {
            console.log("Server closed successfully");
        });
    });

    // Start listening on a specific port and address
    // by using listen() method
    server.listen(PORT, HOST, function () {
        console.log("I'm listening at %s, on port %s", HOST, PORT);
    });

    // Creating and initializing client
    // by using tls.connect() method
    var client = tls.connect(PORT, HOST, options, function () {

        // Setting maximum send fragment limit
        // by using tlsSocket.setMaxSendFragment() method
        value = client.setMaxSendFragment(16384);

        if (value)
            client.write("tls fragment is set");
        else
            client.write("tls fragment is not set")

        client.end(() => {
            console.log("Client closed successfully");
        });

    });

}

function pathTest() {
    var filename = path.basename('/another/info.json');
    console.log(filename);
}

function quryStringTest() {
    // var q = querystring.parse('id=23');
    //var q = querystring.escape('id=07&name=shubham');
    //var q = querystring.stringify('id=07&name=shubham');
    var q = querystring.unescape('id=07&name=shubham');
    // console.log(q.id); // parse
    console.log(q); //escape
}

function readlineTest() {

    var myfile = readline.createInterface({
        input: fs.createReadStream('./package.json')
    });

    var lineNo = 0;

    myfile.on('line', function (line) {
        lineNo++;
        console.log('Line Number ' + lineNo + ' : ' + line);
    })
}

function netTest() {

    console.log('i have created separate file for it !');
}

function StringDecoderTest() {
    var decode = new StringDecoder('utf8');
    // var buffer = Buffer('semicolon');
    var buffer = Buffer.from('semicolon is best packed with features packed with technology packed with security');

    console.log(buffer);
    console.log(decode.write(buffer));
}

function zlibTest() {

    console.log('zlib called !');
    // var gzip = zlib.createGzip();
    // var gzip = zlib.createInflate();
    var read = fs.createReadStream('./try.js');
    var write = fs.createWriteStream('./demo.js.gz');
    read.pipe(gzip).pipe(write);

    console.log('Zip file created !'.rainbow);
}

function timerTest() {
    var myInt = setInterval(function () {
        console.log("Hello Semicolon ; ".bgYellow.bold);
    }, 500);
}

function http2Test() {

    const http2 = require('http2')

    // The `http2.connect` method creates a new session with example.com
    const session = http2.connect('https://kcsintranet.kcsitglobal.com')

    // If there is any error in connecting, log it to the console
    session.on('error', (err) => console.error(err))
}

function utilTest() {

    const debuglog = util.debuglog('alfa-beta');

    debuglog('Hii there, debuglog from alfa-beta [%d]', 2333);

    const generalLog = util.debuglog('alfa-');
    const timerLog = util.debuglog('alfa-romeo');
    const delay = 800;

    generalLog('Leaving alfa-...');
    console.log("Wait for timerLog...")
    setTimeout(() => {
        timerLog('timer fired after %d ', delay);
    }, delay);
}

