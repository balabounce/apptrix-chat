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
                            <span>Hi John, what do you think about corporate messengers?<br/>I know some new apps on UC market</span>
                            <div className="time_container">
                                <span>
                                    7:41 PM
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message">
                    <div className="avatar">
                        <img src={avatar_icon} alt="avatar_companion" />
                    </div>
                    <div className="dialog_container">
                        <div className="message_body message_body_companion">
                            <h5>Makaev Azim</h5>
                            <span>I did’t have time to study all unified communications market.<br/>The real issue is overload.</span>
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
                <div className="message"> 
                    <div className="dialog_container">
                        <div className="message_body message_body_me">
                            <span>Hi First name, I need some time for creating study peport.<br/>3 hours for everything</span>
                            <div className="time_container">
                                <span>
                                    7:41 PM
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="companion_container">
                <div className="message">
                    <div className="avatar">
                        <img src={avatar_icon} alt="avatar_companion" />
                    </div>
                    <div className="dialog_container">
                        <div className="message_body message_body_companion">
                            <h5>Makaev Azim</h5>
                            <span>Ok, just do it</span>
                            <div className="time_container">
                                <span>
                                    7:41 PM
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
}

export default Dialog;
