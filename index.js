const port = process.env.PORT || 3000;
const http = require("http");

const requestListener = function (req, res) {
  if (req.method !== "GET") return res.writeHead(405).end("Method Not Allowed");
  res.writeHead(200).end("Hello, World!");
};

const server = http.createServer(requestListener);
server.listen(port);
