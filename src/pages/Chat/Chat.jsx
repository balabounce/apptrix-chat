import React from 'react';
import { Header } from '../../components';
import { Dialog } from '../../components';
import { InputForm } from '../../components';
import {useParams} from 'react-router-dom';
const Chat = () => {
    const [messageList, setMessageList] = React.useState(localStorage.getItem('messages') ? JSON.parse(localStorage.getItem('messages')) : []);
    const [currentMessage, setCurrentMessage] = React.useState('');
    const [isConnectionOpen, setConnectionOpen] = React.useState(false);

    const { userName } = useParams();

    const ws = React.useRef();

    const sendMessage = () => {
        if(!currentMessage) return;
        ws.current.send(JSON.stringify({sender: userName, body: currentMessage}));
    };

    React.useEffect(() => {
        ws.current = new WebSocket('ws://localhost:9999');
        ws.current.onmessage = (e) => {
            const message = JSON.parse(e.data);
            setMessageList((_messageList) => [..._messageList, message]);
        };

        ws.current.onopen = () => {
            console.log('Connection complete');
            setConnectionOpen(true);
        };

        return () => {
            console.log('Cleaning up! 🧼');
            ws.current.close();
        }
    }, []);

    React.useEffect(() => {
        localStorage.setItem('messages', JSON.stringify(messageList));
    }, [messageList])

    const props = {currentMessage, setCurrentMessage, isConnectionOpen, sendMessage};
    return (
        <>
            <Header/>
            <Dialog messageList={messageList}/>
            <InputForm {...props}/>
        </>
    )
};

export default Chat;
