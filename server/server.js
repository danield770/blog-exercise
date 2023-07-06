// // JSON Server module
// import { create, router as _router, defaults, rewriter } from 'json-server';
// const server = create();
// const router = _router('db/db.json');
// const middlewares = defaults();

// server.use(middlewares);
// // Add this before server.use(router)
// server.use(
//   // Add custom route here if needed
//   rewriter({
//     '/api/*': '/$1',
//   })
// );
// server.use(router);
// server.listen(3000, () => {
//   console.log('JSON Server is running');
// });

// // Export the Server API
// export default server;

const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
