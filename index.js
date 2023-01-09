import http from "node:http";

const server = http.createServer((req, res) => {
  if (req.url === "/a" && req.method === "GET") {
    res.end("Hello world");
  } else{
    res.end("Not found.");

  }
  
});

server.listen(3000);

console.log("server berjalan di http://localhost:3000");
