const http = require('http');
const app = require('./app');

//where the project took run
const port = process.env.PORT || 5000; 

//pass the listener 
const server = http.createServer(app); 

server.listen(port); 