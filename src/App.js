import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { JoinForm } from './components'; 
import { Chat } from './pages';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<JoinForm/>} />
                    <Route path='/chat/:userName' element={<Chat/>} />
                </Routes>
            </BrowserRouter>
        </div>
      );
}

export default App;
