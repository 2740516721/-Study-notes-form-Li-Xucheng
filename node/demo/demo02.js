var login = require('login');
var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World');
}).listen(8082);

console.log(login.name);
console.log(login.age);
console.log(login.get());
console.log(login.set());
// console.log('Server running at http://127.0.0.1:8081/');