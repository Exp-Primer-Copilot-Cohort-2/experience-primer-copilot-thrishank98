// create web server
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    fs.readFile('comments.json', function(err, data){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(data);
        res.end();
    });
}).listen(3000, 'localhost');

console.log('Server running at http://localhost:3000/');