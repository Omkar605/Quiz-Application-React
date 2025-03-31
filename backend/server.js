const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");

server.use(cors()); // Enable CORS to allow frontend requests
server.use(middlewares);
server.use(router);

module.exports = server; // Export the server for Vercel
