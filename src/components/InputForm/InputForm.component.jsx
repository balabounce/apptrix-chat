import React from 'react';
import enterSvg from '../../assets/icons/enter.svg';
import enterEmptySvg from '../../assets/icons/emptyEnter.svg';
import './InputForm.styles.scss';
const InputForm = ({currentMessage, setCurrentMessage, isConnectionOpen, sendMessage}) => {
    const [inputStatus, setInputStatus] = React.useState(false);

    React.useEffect(() => {
        if(!currentMessage.replace(/\n/, '')) {
            setInputStatus(false);
        } else {
            setInputStatus(true);
        }
    }, [currentMessage]);

    return <section className="input">
            <div  className="input_container">
                <form name='publish'>
                    <textarea className='textarea_input' 
                    name='message' 
                    type="text" 
                    value={currentMessage}
                    placeholder='Enter text message' 
                    onKeyPress={(e) => {
                        if(e.key === 'Enter' && inputStatus && isConnectionOpen) { 
                            sendMessage();
                            setCurrentMessage('');
                        }
                    }} 
                    onChange={(e) => {
                        const texArea = document.querySelector(`.${e.target.classList}`);
                        setCurrentMessage(e.target.value);
                        texArea.style.cssText = 'height:auto; padding:0';
                        texArea.style.cssText = 'height:' + texArea.scrollHeight + 'px';
                    }} />
                    {inputStatus ? 
                        <button type='submit' 
                                disabled={!isConnectionOpen}
                                onClick={(e) => {
                                    e.preventDefault();
                                    sendMessage();
                                    setCurrentMessage('');
                                }}>
                                <img src={enterSvg} alt="submit_post" />
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
