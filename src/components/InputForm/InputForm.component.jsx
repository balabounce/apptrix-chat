import React from 'react';
import socket from '../../server/socket';
import enterSvg from '../../assets/icons/enter.svg';
import enterEmptySvg from '../../assets/icons/emptyEnter.svg';
import './InputForm.styles.scss';
import { createSocket } from '../../server/createSocket';
const InputForm = ({userName, roomId, currentMessage, setCurrentMessage, setMessageList}) => {
    const [inputStatus, setInputStatus] = React.useState(false);

    const timeFormat = () => {
        let time = new Date();
        if(Date.now().getHours <= 12) {
            return time = `${+time.getHours()}:${time.getMinutes()} AM`;
        } else {
            return time = `${(+time.getHours()-12)}:${time.getMinutes()} PM`;
        }
    }

    const sendMessage = () => {
        if (!!currentMessage) {
            const time = timeFormat();
            const messageData = {
                roomId,
                author: userName,
                message: currentMessage,
                time
            };
            socket.emit('SEND_MESSAGE', messageData);
            setMessageList((list) => [...list, messageData]);
        };
    };
    return <section className="input">
            <div  className="input_container">
                <form name='publish'>
                    <textarea className='textarea_input' 
                    name='message' 
                    type="text" 
                    value={currentMessage}
                    placeholder='Enter text message' 
                    onKeyPress={(event) => {
                        if(event.key === 'Enter' && inputStatus) { 
                            sendMessage();
                            setCurrentMessage('');
                        }
                    }} 
                    onChange={(event) => {
                        const texArea = document.querySelector(`.${event.target.classList}`);
                        setCurrentMessage(event.target.value);
                        texArea.style.cssText = 'height:auto; padding:0';
                        texArea.style.cssText = 'height:' + texArea.scrollHeight + 'px';
                        texArea.value.length > 0 ? setInputStatus(true) : setInputStatus(false);
                    }} />
                    {inputStatus ? 
                        <button type='submit' 
                                onClick={(event) => {
                                    event.preventDefault();
                                    sendMessage();
                                }}>
                                <img src={enterSvg} alt="submit_post"/>
                        </button>
                    :
                        <button>
                            <img src={enterEmptySvg} alt="submit_post"/>
                        </button>
                    }
                </form>
            </div>
        </section>;
}

export default InputForm;
