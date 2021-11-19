const socket = new WebSocket('wss://ws.qexsystems.ru');

export const createSocket = () => {
    const form = document.forms.publish;
    const outgoingMessage = form.message.value;
    
    socket.send(outgoingMessage);
    socket.onmessage = (event) => {
        const message = event.data;
        console.log(event.data);
        const messageElem = document.createElement('div');
        messageElem.textContent = message;
        document.querySelector('.me_container');
    }
    return false;
};
