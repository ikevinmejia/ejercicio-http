const jsonServer =  require('json-server');

const server = jsonServer.create();

const router = jsonServer.router('./data/data.json');

const middlewares = jsonServer.defaults();

const port = process.env.PORT || 4000;

server.use(middlewares);
server.use(router);
server.listen(port, () => console.log('Online server'));