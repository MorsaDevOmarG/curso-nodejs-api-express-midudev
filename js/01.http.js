const http = require('node:http');

const desiredPort = process.env.PORT ?? 1234;

const processRequest = (req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Charset', 'utf-8');
        res.
        res.end('Bienvenidos a la página de inicio');
    }
}

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
    console.log(`Server listening on port http://localhost:${desiredPort}`);
});

// Podemos ejectuar con: node --watch (nombre archivo), el --watch hace que se reinicié con los cambios sin reiniciar manual...