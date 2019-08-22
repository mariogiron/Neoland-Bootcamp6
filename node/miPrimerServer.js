const http = require('http');

let server = http.createServer((req, res) => {
    console.log(req);
    res.end('Hola Mundo Servidores! Chachi!');
})

server.listen(3000);