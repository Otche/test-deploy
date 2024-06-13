const http = require("node:http");

const server = http.createServer((_, res) => {
  return res
    .writeHead(200, { "Content-Type": "text/html" })
    .end("<h1>My Test with bantar</h1>");
});
const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`server listen on ${PORT}`);
});
