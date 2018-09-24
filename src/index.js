const http = require("http");
const morgan = require("morgan");
const { middleware, setBasePath } = require("route-to");
const router = require("./router");

const PORT = process.env.PORT || 3000;
const BASE = process.env.BASE || "";
const LOGTYPE = process.env.LOGTYPE || "combined";

const server = http.createServer(
  middleware(setBasePath(BASE), morgan(LOGTYPE), (req, res) => router(req, res))
);

server.listen(PORT, err => {
  if (err) throw err;
  console.log(`http://localhost:${PORT}`);
});
