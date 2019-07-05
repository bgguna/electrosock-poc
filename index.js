var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    socket.on('connection', function(socket) {
        console.log('a user connected');
    });

    socket.on('chat message', function(msg) {
        io.emit('chat message', msg);
    });
});

http.listen(port, function() {
    console.log('listening on *:' + port);
});