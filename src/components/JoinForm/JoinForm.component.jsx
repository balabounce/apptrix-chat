import React from "react";
import axios from "axios";
import socket from '../../server/socket';
import './JoinForm.styles.scss';

const JoinForm = ({ userName, roomId, setUserName, setRoomId, setAuth }) => {

    const onEnter = async () => {
        if (!!userName && !!roomId) {
            console.log('*')
            socket.emit('JOIN_ROOM', roomId);
            setAuth(true);
        };
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
            value={'Inside'}
            onClick={onEnter}
            />
        </div>
    )
}

export default JoinForm;
