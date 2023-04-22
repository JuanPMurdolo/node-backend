const http = require('http');

PORT = 8081;

http.createServer((req, res) => {
    res.write('chota');
    res.end();
})
.listen(8080);

//Create a function for the server to respond to requests
function handleRequest(req, res) {
    res.end('It Works!! Path Hit: ' + req.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Start our server
server.listen(PORT, function() {
    //Callback triggered when server is successfully listening. Hurray!
    console.log('Server listening on: http://localhost:%s', PORT);
});