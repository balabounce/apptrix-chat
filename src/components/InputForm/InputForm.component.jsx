import enterSvg from '../../assets/icons/enter.svg';
import enterEmptySvg from '../../assets/icons/emptyEnter.svg';
import './InputForm.styles.scss';
import { useState } from 'react';
import { createSocket } from '../../server/createSocket';
const InputForm = () => {
    const [inputStatus, setInputStatus] = useState(false);
    const [messageValue, setMessageValue] = useState('');

    return <section className="input">
            <div  className="input_container">
                <form name='publish'>
                    <textarea className='textarea_input' 
                    name='message' 
                    type="text" 
                    value={messageValue}
                    placeholder='Enter text message' 
                    onChange={(event) => {
                        const texArea = document.querySelector(`.${event.target.classList}`);
                        setMessageValue(event.target.value);
                        texArea.style.cssText = 'height:auto; padding:0';
                        texArea.style.cssText = 'height:' + texArea.scrollHeight + 'px';
                        texArea.value.length > 0 ? setInputStatus(true) : setInputStatus(false);
                    }} />
                    {inputStatus ? 
                        <button type='submit' onClick={(event) => {
                            event.preventDefault();
                            createSocket();
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
