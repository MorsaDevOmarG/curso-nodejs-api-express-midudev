const http = require('node:http');
const fs = require('fs');

const desiredPort = process.env.PORT ?? 1234;

const processRequest = (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    if (req.url === '/') {
        res.end('<h1>Mi página</h1>');
    } else if (req.url === '/imagen-super-bonita.png') {
        res.setHeader('Content-Type', 'image/png');

        fs.readFile('imagen-super-bonita.png', (err, data) => {
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.end('Error leyendo el archivo');
            } else {
                res.setHeader('Content-Type', 'image/png');
                res.end(data);
            }
        });
    } else if (req.url === '/prueba') {
        res.end('Esta es una prueba');
    } else {
        res.statusCode = 404;
        res.end('Página no encontrada');
    }
}

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
    console.log(`Server listening on port http://localhost:${desiredPort}`);
});