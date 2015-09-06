
var http = require('http');

// var options = {
//   host: 'www.google.com.au',
//   path: '/index.html'
// }
//
// http.get(options, function(response) {
//   console.log("Got response: " + response.statusCode);
//   response.on("data", function(info) {
//     console.log("Body: " + info);
//   });
// });


var url = 'http://omdbapi.com/?t=jaws';

var callback = function(response) {
  console.log("Response status code: " + response.statusCode);

  response.setEncoding('utf8');

  response.on('data', function(data) {
    console.log(data); // or did us ('Data: ' + data);
  });
}

http.get(url, callback);
