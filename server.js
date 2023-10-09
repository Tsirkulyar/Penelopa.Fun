// const { createServer } = require('http');
// const { parse } = require('url');
// const { readFileSync } = require('fs');
// const next = require('next');

// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   createServer((req, res) => {
//     const parsedUrl = parse(req.url, true);
//     const { pathname } = parsedUrl;

//     if (pathname === '/') {
//       const indexHtml = readFileSync('./index.html', 'utf8');
//       res.setHeader('Content-Type', 'text/html');
//       res.end(indexHtml);
//     } else {
//       handle(req, res, parsedUrl);
//     }
//   }).listen(3000, (err) => {
//     if (err) throw err;
//     console.log('> Ready on http://localhost:3000');
//   });
// });