import React from 'react';
import './Header.styles.scss';
import avatar_icon from '../../assets/icons/user-avatar.svg'
import {useParams} from 'react-router-dom';

const Header = () => {
    const { userName } = useParams();
    const [companionName, setCompanionName] = React.useState('');
    let localNamesArr = React.useRef();
    localNamesArr = localStorage.getItem('names') ? localStorage.getItem('names').replace(/"/g, '').split(' ') : userName.split('');
    const [names, setAllNames] = React.useState(localNamesArr);
    React.useEffect(() => {
        window.addEventListener('storage', () => {
            localNamesArr.current = localStorage.getItem('names') && localStorage.getItem('names').replace(/"/g, '').split(' ');
            setAllNames(localNamesArr.current);
        });
    }, []);

    React.useEffect(() => {
        if(Array.isArray(names) && names.length === 2) {
            setCompanionName(localNamesArr.filter(localName => localName !== userName));
        }; 
    }, [userName, names]);

    return  <header className='header'>
                <div className="avatar">
                    <img src={avatar_icon} alt="avatar" />
                </div>
                <div className="name">
                    <span>
                        {!!companionName 
                        ? companionName 
                        : '???'}
                    </span>
                </div>
            </header>
}

export default Header;
