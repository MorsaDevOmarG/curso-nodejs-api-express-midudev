const http = require('node:http');

const desiredPort = process.env.PORT ?? 1234;

const processRequest = (req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('Bienvenidos a la página de inicio');
    } else if (req.url = '/prueba') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('Bienvenidos a la página de pruebas');
    }
}

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
    console.log(`Server listening on port http://localhost:${desiredPort}`);
});

// Podemos ejectuar con: node --watch (nombre archivo), el --watch hace que se reinicié con los cambios de manera manual