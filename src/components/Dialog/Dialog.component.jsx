import React from 'react';
import './Dialog.styles.scss';
import avatar_icon from '../../assets/icons/user-avatar.svg'
import {useParams} from 'react-router-dom';
import { formatTime } from '../../utils/utils';

const Dialog = ({messageList}) => {
    const { userName } = useParams()

    return <section className="dialog_section">
            {messageList.map((message, index) => {
                    if(userName !== message.sender) {
                        return <div className="message" key={`${message.sender} + ${index}`}>
                            <div className="avatar">
                                <img src={avatar_icon} alt="avatar_companion" />
                            </div>
                            <div className="dialog_container">
                                <div className="message_body message_body_companion">
                                    <h5>{message.sender}</h5>
                                    <span>{message.body}</span>
                                    <div className="time_container">
                                        <span>
                            {formatTime(new Date(message.sentAt).toLocaleTimeString(undefined, { timeStyle: 'short' }))}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    } else {
                        return <div className="me_message" key={'me_message' + index}> 
                            <div className="dialog_container">
                                <div className="message_body message_body_me">
                                    <span>{message.body}</span>
                                    <div className="time_container">
                                        <span>
                            {formatTime(new Date(message.sentAt).toLocaleTimeString(undefined, { timeStyle: 'short' }))}
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
