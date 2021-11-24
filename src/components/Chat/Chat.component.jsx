import React, {useEffect} from 'react';
import socket from '../../server/socket';
import Header from '../Header/Header.component';
import Dialog from '../Dialog/Dialog.component';
import InputForm from '../InputForm/InputForm.component';
const Chat = ({userName, roomId}) => {
    const [currentMessage, setCurrentMessage] = React.useState('');
    const [messageList, setMessageList] = React.useState([]);
    
    const props = {userName, roomId, setMessageList};
    useEffect(() => {
        socket.on('RECEIVE_MESSAGE', data => {
            setMessageList((list) => [...list, data]);
        });
    }, []);

    return (
        <>
            <Header/>
            <Dialog messageList={messageList} userName={userName}/>
            <InputForm {...props} currentMessage={currentMessage} setCurrentMessage={setCurrentMessage}/>
        </>
    )
};

export default Chat;
