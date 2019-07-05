var io = require('socket.io-client');
var socket = io.connect('http://localhost:3000');
const readline = require('readline');

console.log('connected to localhost:3000');


socket.on('chat message', function(msg) {
    console.log('received message: ' + msg);
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (msg) => {
    socket.emit('chat message', msg);
}).on('close', () => {
    console.log('Have a great day!');
    process.exit(0);
});