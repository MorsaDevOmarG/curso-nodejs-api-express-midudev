const express = require('express');
const app = express();
const PORT = process.env.PORT ?? 1234;

app.get('/', (req, res) => {
    res.status(200).send('Hola mundo desde Express!');
});

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
});