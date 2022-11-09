// const http = require("https");

// const options = {
// 	"method": "GET",
// 	"hostname": "cricbuzz-cricket.p.rapidapi.com",
// 	"port": null,
// 	"path": "/matches/v1/recent",
// 	"headers": {
// 		"X-RapidAPI-Key": "5453751be8msh79e37f2490dcd06p1f95c2jsn064b3b7cf3c8",
// 		"X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
// 		"useQueryString": true
// 	}
// };

// const server = http.createServer((req, res) => {

//   const chunks = [];
//   const body = null;

//    req = http.request(options, function (res) 
//    {

//     res.on("data", function (chunk) {
//       chunks.push(chunk);
//     });

//     res.on("end", function () {
//        body = Buffer.concat(chunks);
//       //console.log(body.toString());
//     });
//   });
//   res.write(body.toString())

//   res.end();
//   req.end();
// })


// const host = '127.0.0.1'
// server.listen(3001, host, () => {
//   console.log('server is running...')
// })


const http = require('http');

http.createServer((request, response) => {
  
  const { headers, method, url } = request;

  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    
    response.on('error', (err) => {
      console.error(err);
    });

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.writeHead(200, { 'Content-Type': 'application/json' })

    const responseBody = { headers, method, url, body };

    response.write(JSON.stringify(responseBody));
    response.end();
    
    response.end(JSON.stringify(responseBody))
    
  });
}).listen(8080);





