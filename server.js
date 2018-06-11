const http = require('http');
const port = 8080;
const server = http.createServer();

server.on('request', (request, response) => {
    if (request.url === '/hello') {
        if (request.method === 'GET') {
            console.log('Hello, getty!');
            response.end();
        } else if (request.method === 'POST') {
            console.log('Heello, posty!');
            response.end();
        }
    }
});
server.listen(port, function() {
    console.log(`Rodando na porta ${port}`);
});
