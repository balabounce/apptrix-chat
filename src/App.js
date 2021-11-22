import React from 'react';
import socket from './server/socket';
import reducer from './store/reducer';
import './App.css';
import { Header } from './components';
import { Dialog } from './components';
import { InputForm } from './components';
import { JoinForm } from './components'; 

function App() {
    const [state, dispatch] = React.useReducer(reducer, {
        joined: false,
        roomId: null,
        userName: null
    });
    const onLogin = (obj) => {
        dispatch({
            type: 'JOINED',
            payload: obj,
        });
        socket.emit('ROOM:JOIN', obj);
    };

    socket.on('ROOM:JOINED', users => {
        console.log('users come', users);
    })

    return (
        <div className="App">
        {/*<Header/>
          //<Dialog/>
          <InputForm/>*/}
        { !state.joined && <JoinForm onLogin={onLogin} /> }
        </div>
      );
}

export default App;
