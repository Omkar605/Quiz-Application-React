const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");

// ✅ Enable CORS
server.use(cors());
server.use(middlewares);
server.use(router);

module.exports = server; // ✅ Important for Vercel
