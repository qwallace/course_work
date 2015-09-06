var http = require('http');
var url = require('url');
var fs = require('fs');

var app = function(request, response) {
  console.log(new Date());
  console.log(request.url);

  // find what path the user is coming from
  var path = url.parse(request.url).path;

  switch (path) {
    case '/':
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write('<h1>Home Page</h1>');
      response.end(); // or response.end('<h1>Home Page</h1>') and remove line above
      break;
    case '/about':
      fs.readFile(__dirname + '/test.html', function() {
        if (error) {
          // too bad
        } else {
          response.write(data, 'utf8');
          response.end(); // must include when using a callback //
        }
      });
      break;
    default:
      response.writeHead(404, {'Content-Type': 'text/html'});
      response.write('<h1>404 - Missing resource</h1>');
      response.end();
  }

  // if (path === '/') {
  //   response.writeHead(200, {'Content-Type': 'text/html'});
  //   response.write('<h1>Home Page</h1>');
  //   response.end();
  // } else if (path === '/about') {
  //   response.writeHead(200, {'Content-Type': 'text/html'});
  //   response.write('<h1>About Page</h1>');
  //   response.end();
  // } else {
  //   response.writeHead(404, {'Content-Type': 'text/html'});
  //   response.write('<h1>404 - Missing resource</h1>');
  //   response.end();
  // }

}

var PORT = process.argv[2] || 8000;

var server = http.createServer(app);

server.listen(PORT, function() {
  console.log('Welcome to viiminds server!');
  console.log('Listening on port 8000');
});
