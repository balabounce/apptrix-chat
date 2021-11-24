import React, {useState} from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import socket from './server/socket';
import reducer from './store/reducer';
import './App.css';
import { JoinForm } from './components'; 
import { Chat } from './components';

function App() {
    const [userName, setUserName] = useState('');
    const [roomId, setRoomId] = useState('');
    const [isAuth, setAuth] = useState(false);
    console.log(isAuth);
    
    return (
        <div className="App">
        {(!isAuth) ?
            <JoinForm 
            userName={userName} 
            roomId={roomId} 
            setUserName={setUserName} 
            setRoomId={setRoomId}
            setAuth={setAuth}
            />
            :
             <Chat userName={userName} roomId={roomId}/>
        }
        </div>
      );
}

export default App;
