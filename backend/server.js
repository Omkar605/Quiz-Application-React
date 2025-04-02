const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");

server.use(cors());
server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000; // Ensure the port is assigned

server.listen(PORT, () => {
  console.log(`✅ JSON Server is running on http://localhost:${PORT}`);
});
