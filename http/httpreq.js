// const http = require('http')

// const options = {
//     "method": "GET",
//     "hostname": "cricbuzz-cricket.p.rapidapi.com",
//     "port": null,
//     "path": "/matches/v1/recent",
//     "headers": {
//         "X-RapidAPI-Key": "39ee93099amsh90a94bf48362163p15e903jsnc3338d887776",
//         "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
//         "useQueryString": true
//     }
// };

// const server = http.createServer((req, res) => {
//     req.url()
//     res.write('Hello semicolon')
//     res.end();
// })
// const host = '127.0.0.1'
// server.listen(3001, host, () => {
//     console.log('server is running...')
// })

const http = require("https");

const parameters = {
  "method": "GET",
  "hostname": "cricbuzz-cricket.p.rapidapi.com",
  "port": null,
  "path": "/mcenter/v1/41881",
  "headers": {
    "X-RapidAPI-Key": "5453751be8msh79e37f2490dcd06p1f95c2jsn064b3b7cf3c8",
    "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
    "useQueryString": true
  }
};

const req = http.request(parameters, (res) => {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();