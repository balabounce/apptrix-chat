const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.json());

const rooms = new Map();

app.get('/rooms/:id', (req, res) => {
    const { id: roomId } = req.params.id;
    const obj = rooms.has(roomId) 
        ? {
            users: [...rooms.get(roomId).get('users').values()],
            messages: [...rooms.get(roomId).get('users').values()],
        } 
        : {
            users: [], messages: []
        };
    res.json(obj);
});

app.post('/rooms', (req, res) => {
    const { roomId, userName } = req.body;
    if (!rooms.has(roomId)) {
        rooms.set(
            roomId,
            new Map([
                ['users', new Map()],
                ['messages', []],
            ])
        );
    };
    res.send();
});


io.on('connection', (socket) => {
    socket.on('ROOM:JOIN', ({roomId, userName}) => {
        socket.join(roomId);
        rooms.get(roomId).get('users').set(socket.id, userName);
        const users = [...rooms.get(roomId).get('users').values()];
        socket.broadcast.to(roomId).emit('ROOM:SET_USERS', users);
        //socket.emit();
    });
    
    socket.on('ROOM:NEW_MESSAGE', ({roomId, userName, text}) => {
        const obj = {
            userName,
            text,
        };
        rooms.get(roomId).push(obj);
        socket.broadcast.to(roomId).emit('ROOM:NEW_MESSAGE', obj);
    });
    socket.on('disconnected', () => {
        rooms.forEach((value, roomId) => {
            if (value.get('users').delete(socket.id)) {
                const users = [...rooms.get(roomId).get('users').values()];
                socket.broadcast.to(roomId).emit('ROOM:LEAVE', users);

            }
        });
    });

    console.log('user connected', socket.id);
});

server.listen(9999, (error) => {
    if(error) throw Error(error);
    console.log('server begin')
});
