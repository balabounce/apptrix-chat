import './Dialog.styles.scss';
import avatar_icon from '../../assets/icons/user-avatar.svg'

const Dialog = ({messageList, userName}) => {
    return <section className="dialog_section">
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
            
                <div className="me_message"> 
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
                {messageList.map((messageContent, index) => {
                    console.log(userName, messageContent.userName);
                    if(userName !== messageContent.author) {
                        return <div className="message" key={`${messageContent.userName} + ${index}`}>
                            <div className="avatar">
                                <img src={avatar_icon} alt="avatar_companion" />
                            </div>
                            <div className="dialog_container">
                                <div className="message_body message_body_companion">
                                    <h5>{messageContent.author}</h5>
                                    <span>{messageContent.message}</span>
                                    <div className="time_container">
                                        <span>
                                            {messageContent.time}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    } else {
                        return <div className="me_message" key={'me_message' + index}> 
                            <div className="dialog_container">
                                <div className="message_body message_body_me">
                                    <span>{messageContent.message}</span>
                                    <div className="time_container">
                                        <span>
                                            {messageContent.time}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        }
                })}
        </section>
}

export default Dialog;
