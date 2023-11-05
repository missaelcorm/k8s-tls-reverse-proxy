const os = require('os');
const express = require('express');

const hostname = os.hostname();

const app = express();

app.get('/', (req, res) => {
    res.send(`Hello from ${hostname}`);
    });

app.listen(3000, () => {
    console.log(`Server running at http://${hostname}:3000/`);
    });
