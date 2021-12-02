import React from "react";
import { useNavigate } from 'react-router-dom';
import './JoinForm.styles.scss';

const JoinForm = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = React.useState(''); 

    const navigateToChatPage = () => {
        if (userName !== '') { 
            if(localStorage.getItem('names')) {
                const names = localStorage.getItem('names').split(' ');
                if (names.length !== 2) {
                    localStorage.setItem('names', 
                    JSON.stringify(localStorage.getItem('names') + ` ${userName}`)); 
                    navigate(`/chat/${userName}`);
                } else {
                    console.log(names);
                    if (names.some(name => userName === name.replace(/"/g, ''))) {
                        navigate(`/chat/${userName}`); 
                    } else {
                        alert('Room is already occupied'); 
                    }
                } 
            } else {
                localStorage.setItem('names', userName);
                navigate(`/chat/${userName}`);
            }
        }    
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
            onChange={(e) => setUserName(e.target.value)}
            onKeyPress={(e) => {
                if(e.key === 'Enter') navigateToChatPage();
            }} 
            required/>
            <input
            type='submit' 
            id='form_submit' 
            value={'Inside'}
            onClick={navigateToChatPage}
            />
            <input
            type='submit' 
            id='cache_clear' 
            value={'Clear cache'}
            onClick={() => localStorage.clear()}
            />
        </div>
    )
}

export default JoinForm;
