const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 9999 });

const users = new Set(); 

const sendMessage = (message) => {
    for (const user of users) {
        user.socket.send(JSON.stringify(message));
    }
};

server.on('connection', socket => {
    console.log(`You are inside`);

    const userRef = {
        socket: socket
    };

    if (users.size !== 2) {
        users.add(userRef);
        if (users.size === 2) {
            console.log(`New user is connected`);
        }
    } else {
        console.log('Access Denied');
    }

    socket.on('message', message => {
        try {
            const parsedMessage = JSON.parse(message);

            if (
                typeof parsedMessage.sender !== 'string' ||
                typeof parsedMessage.body !== 'string'
            ) {
                console.error('Invalid message received', message);
                return;
            };

            const verifiedMessage = {
                sender: parsedMessage.sender,
                body: parsedMessage.body,
                sentAt: Date.now()
            };

            sendMessage(verifiedMessage);

        } catch (error) {
            console.log('Error parsing message!', error);
        }

    });

    socket.on('close', (code, reason) => {
        console.log(`User disconnected with code ${code} and reason ${reason}`);
        users.delete(userRef);
    });
});

