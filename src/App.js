import React from 'react';
import reducer from './store/reducer';
import './App.css';
import { Header } from './components';
import { Dialog } from './components';
import { InputForm } from './components';
import { JoinForm } from './components'; 

function App() {
    const [state, dispatch] = React.useReducer(reducer, {
        isAuth: false
    });

    const onLogin = () => {
        dispatch({
            type: 'IS_AUTH',
            payload: true
        })
    };
    return (
        <div className="App">
        {/*<Header/>
          //<Dialog/>
          <InputForm/>*/}
        { !state.isAuth && <JoinForm onLogin={onLogin} />}
        </div>
      );
}

export default App;
