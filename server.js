const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server,{cors:{origin:"*"}});

const rooms = new Map();

app.get('/rooms', (request, response) => {
    response.json(rooms);
});

app.post('/rooms', (request, response) => {
    console.log('Hi');
})

io.on('connection', (socket) => {
    console.log('User connected', socket.id);
})

server.listen(9999, (error) => {
    if(error) {
        throw Error(error);
    };
    
    console.log('The server is running');
});