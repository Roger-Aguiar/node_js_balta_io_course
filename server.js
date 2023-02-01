'use strict'

const http = require('http');
const debug = require('debug');
const express = require('express');
const res = require('express/lib/response');

const app = express();
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);
const router = express.Router();

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: 'Node Store API',
        version: '0.0.1',
        description: 'This is my first route using nodeJs!'
    });
});

app.use('/', route);
server.listen(port);

console.log("Server is running at port " + port);

function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val
    }
    
    if (port >= 0) {
        return port;
    }
    return false;
}