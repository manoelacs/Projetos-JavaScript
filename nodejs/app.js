// Modulos internos
var handle = require('./handle.js'); //pode ser escrito apenas './handle'
var n = require('./name.js');

// Modulos externos:
var http =  require('http');
var events = require('events');
var emiter = new events.EventEmitter();
require('console-log-hello-world');

emiter.on('say123', say);
function say(){
    //console.log('Im saying...');
}
//forma de emitir um evento
emiter.emit('say123');

//function handle(request, response) {
//     response.writeHead(200, {
//         'Content-Type': 'text/html'
//     });
//     response.write('<!DOCTYPE "html">');
//     response.write('<html>');
//     response.write('<head><title>Http Module</title></head>');
//     response.write('<body>');
//     response.write('<h1>Hello from http module SON</h1>');
//     response.write('<body>');
//     response.write('</http>');
//
//     response.end();
// }
//console.log(n.name);
var server  = http.createServer(handle);
server.listen(9000, function () {
    console.log('Server is listening  at port 9000');
});