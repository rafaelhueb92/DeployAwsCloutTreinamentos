const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET") res.json({ msg: "Server Running" });
});

server.listen(9000, () => console.log("Server Running"));
