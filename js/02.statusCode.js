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
/**
 * Errores:
 * 100/199: Respuestas informativas
 * 200-299: Respuestas satisfactorias
 * 300-399: Redirecciones
 * 400-499: Errores del cliente
 * 500-599: Errores del servidor
 * 
 * En lapágina de: 
 * http.cat 
 * encontraremos la definición de todos los errores
*/