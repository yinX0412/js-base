const http = require('http');
const fs = require('fs');
const path = require('path');
const serve = http.createServer((request, response) => {
  // console.log(getPrototypeChain(response));
  // response.end('hello node');
  const { headers, url, method } = request;
  if (url === '/' && method === 'GET') {
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'text/plain;charset=utf-8' });
        response.end('服务错误');
        return;
      }
      response.statusCode = 200;
      response.setHeader('Content-type', 'text/html');
      response.end(data);
    });
  } else if (url === '/users' && method === 'GET') {
    response.writeHead(200, { 'Content-type': 'application/json' });
    response.end(JSON.stringify({ name: 'panyuxin', sex: 'male' }));
  } else if (method === 'GET' && headers.accept.indexOf('image/*') !== -1) {
    fs.createReadStream(path.join(__dirname, url)).pipe(response);
  } else {
    response.statusCode = 404;
    response.setHeader('Content-type', 'text/html');
    response.end('404 nopage');
  }
});

serve.listen(3000);

/**
 *打印原型链
 *
 * @param {*} obj
 */
function getPrototypeChain(obj) {
  const protoChain = [];
  while ((obj = Object.getPrototypeOf(obj))) {
    protoChain.push(obj);
  }
  return protoChain;
}
