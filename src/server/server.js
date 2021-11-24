const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    }
});

io.on('connection', (socket) => {
    console.log('User connected', socket.id); 
    
    socket.on('JOIN_ROOM', data => {
        socket.join(data);
        console.log(`User with ID: ${socket.id} joined room: ${data}`);
    });
    socket.on('SEND_MESSAGE', data => {
        socket.to(data.roomId).emit('RECEIVE_MESSAGE' ,data);
    });
    socket.on('disconnect', () => {
        console.log('User disconnected', socket.id);
    });
});


server.listen(9999, () => {
    console.log('SERVER RUNNING');
});
