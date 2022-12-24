const assert = require("assert");
const http = require("http");

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Hello, world.\r\n");
  res.end();
});

server.on('connection', (client) => {
  console.log('client connected');
  client.on('data', (data) => {
    console.log(`data: ${data.toString('utf-8')}`);
  })
  client.on('close', (err) => {
    console.log('client closed');
  })
})

server.listen(8000, function () {
  console.log("Listening on port 8000");
});

// to test the server, we can use native http request to make ajax calls
// var req = http.request(
//   {
//     port: 8000,
//   },
//   function (res) {
//     console.log("HTTP headers:", res.headers);
//     res.on("data", function (data) {
//       console.log("Body:", data.toString());
//       assert.equal("Hello, world.\r\n", data.toString());
//       assert.equal(200, res.statusCode);
//       server.unref();
//     });
//   }
// );
// req.end();
