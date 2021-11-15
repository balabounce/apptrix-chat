import './Header.styles.scss';
import avatar_icon from '../../assets/icons/user-avatar.svg'

const Header = () => {
    return  <header className='header'>
                <div className="avatar">
                    <img src={avatar_icon} alt="avatar" />
                </div>
                <div className="name">
                    <span>Makaev Azim</span>
                </div>
            </header>
}

export default Header;