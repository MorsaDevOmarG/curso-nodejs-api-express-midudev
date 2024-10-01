const http = require('http');
const dittoJson = require('./04.ditto.json');

const processRequest = (req, res) => {
    const { method, url } = req;

    switch (method) {
        case 'GET':
            switch (url) {
                case '/pokemon/ditto':
                    res.setHeader('Content-Type', 'applitacion/json; charset=utf-8');
                    res.end(JSON.stringify(dittoJson));
                    break;
            
                default:
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html; chartset=utf-8');

                    return res.end('404 Not Found');
                    break;
            }
            break;
        case 'POST':
            switch (url) {
                case '/pokemon': {
                    let body = '';

                    req.on('data', chunk => {
                        body += chunk.toString();
                    });

                    req.on('end', () => {
                        const data = JSON.parse(body);

                        // Llamar una bd
                        res.writeHead(201, {
                            'Content-Type': 'application/json; charset=utf-8'
                        });

                        data.timestamp = DataTransfer.now();

                        res.end(JSON.stringify(data));
                    });
                break;
                }
            
                default:
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/plain; chartset=utf-8');
                    return res.end('Not found');
                    break;
            }
    }
}

const server = http.createServer(processRequest);;

server.listen(1234, () => {
    console.log('Server is listening on port 1234');
});