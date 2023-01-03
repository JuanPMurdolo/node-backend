const http = require('http');

http.createServer((req, res) => {
    res.write('HW');
    res.end();
})
.listen(8080);