import React from 'react';
import axios from 'axios';
import socket from './server/socket';
import reducer from './store/reducer';
import './App.css';
import { JoinForm } from './components'; 
import { Chat } from './components';

function App() {
    const [state, dispatch] = React.useReducer(reducer, {
        joined: false,
        roomId: null,
        userName: null,
        users: [],
        messages: []
    });

    const onLogin = async (obj) => {
        dispatch({
            type: 'JOINED',
            payload: obj,
        });
        socket.emit('ROOM:JOIN', obj);
        const { data } = await axios.get(`/rooms/${obj.roomId}`);
        setUsers(data.users);
    };

    const setUsers = (users) => {
         dispatch({
            type: 'SET_USERS',
            payload: users
         });
    };

    React.useEffect(() => {
        socket.on('ROOM:SET_USERS');
        socket.on('ROOM:NEW_MESSAGE', message => {
            dispatch({
                type: 'NEW_MESSAGE',
                payload: message
            });
        });
    }, []);
   window.socket = socket;

    return (
        <div className="App">
        {/*<Header/>
          //<Dialog/>
          <InputForm/>*/}
        { !state.joined ? <JoinForm onLogin={onLogin} /> 
            :
            <> 
                <Chat {...state}/>
            </>
        }
        </div>
      );
}

export default App;
