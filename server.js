const http = require("http");
const pro = require("./app");
var https = require("https");
const fs = require("fs");
var server = http.createServer(
  pro
);

server.listen(8000);
