'use strict'
const app = require('../src/app');
const debug = require('debug')('nodestr:server');
const http = require('http');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
server.on('listening', onListening);
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

function onListening(){
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + address.port;
    debug('Listening on ' + bind); 
}