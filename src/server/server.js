const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);


const mainRoom = new Map([

]);

app.get('/', (req, res) => {
    res.json(mainRoom);
});

io.on('connection', socket => {
    console.log('socket connected', socket);
});

server.listen(9999, (error) => {
    if(error) throw Error(error);
    console.log('server begin')
});