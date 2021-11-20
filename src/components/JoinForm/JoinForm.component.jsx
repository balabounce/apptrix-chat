import React from "react";
import axios from "axios";
import socket from '../../server/socket';
import './JoinForm.styles.scss';

const JoinForm = ({ onLogin }) => {
    const [roomId, setRoomId] = React.useState('');
    const [userName, setUserName] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    const onEnter = async () => {
        if(!roomId || !userName) {
            return alert('Please try again!');
        };
        setIsLoading(true);
        await axios.post('/rooms', {
            roomId,
            userName
        }).then(onLogin);
    };

    return (
        <div className='container'>
            <label htmlFor='username'>Username</label>
            <input 
            type='text' 
            name='username'
            id='username'
            placeholder='Your name'
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            required/>
            <label htmlFor='roomname'>RoomId</label>
            <input 
            type='text' 
            name='roomname'
            id='roomname'
            placeholder='RoomId'
            value={roomId}
            onChange={(event) => setRoomId(event.target.value)}
            required/>
            <input 
            type='submit' 
            id='form_submit' 
            value='Inside'
            onClick={onEnter}
            />
        </div>
    )
}

export default JoinForm;
