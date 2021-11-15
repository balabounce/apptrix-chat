import './Dialog.styles.scss';
import avatar_icon from '../../assets/icons/user-avatar.svg'

const Dialog = () => {
    return <section className="dialog_section">
            <div className="companion_container">
                <div className="message">
                    <div className="avatar">
                        <img src={avatar_icon} alt="avatar_companion" />
                    </div>
                    <div className="dialog_container">
                        <div className="message_body message_body_companion">
                            <h5>Makaev Azim</h5>
                            <span>Hi John, what do you think about corporate messengers?I know some new apps on UC market</span>
                            <div className="time_container">
                                <span>
                                    7:41 PM
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="me_container">
                <div className="message_body message_body_me">
                    <span>Hello World</span>
                </div>
            </div>
        </section>
    
}

export default Dialog;
