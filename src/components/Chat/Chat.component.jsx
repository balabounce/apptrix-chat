import React from 'react';
import socket from '../../server/socket';
import Header from '../Header/Header.component';
import Dialog from '../Dialog/Dialog.component';
import InputForm from '../InputForm/InputForm.component';
const Chat = ({users, messages, userName, roomId}) => {
    const props = {users, messages, userName, roomId}
    const [messageValue, setMessageValue] = React.useState('');
    const onSendMessage = () => {
        socket.emit('ROOM:NEW_MESSAGE',{
            userName,
            roomId,
            text: messageValue
        });
    }
    return (
        <>
            <Header/>
            <Dialog {...props}/>
            <InputForm/>
        </>
    )
};

export default Chat;
