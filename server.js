const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;

/* Store your server in a variable 
    - pass a 'listener' to createServer(): this is a function that is executed whenever
    we get a new request, and is then responsible for returning the response
*/
const server = http.createServer(app);

// Listen on the port we assigned above
server.listen(port);