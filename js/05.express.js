const express = require('express');
const ditto = require('js/04.ditto.json');
const app = express();

// Middleware
app.use((req, res, next) => {
    console.log('Mi primer MIDDLEWARE');

    next();
});

// Ayuda a prevenir vulnerabilidades
app.disable('x-powered-by');

const PORT = process.env.PORT ?? 1234;

app.get('/pokemon/ditto', (req, res) => {
    res.json(ditto);
});

app.post('/pokemon', (req, res) => {
    let body = '';

    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        const data = JSON.parse(body);
        data.timestamp = Date.now();
        res.status(201).json(data);
    });
});

// La última a la que va a llegar
app.use(PORT, (req, res) => {
    res.status(404).send('404');
});

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
});