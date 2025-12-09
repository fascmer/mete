import { WebApp } from 'meteor/webapp';

WebApp.connectHandlers.use('/', (req, res, next) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Hello World');
  } else {
    next();
  }
});
