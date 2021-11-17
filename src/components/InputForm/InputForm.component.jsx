import enterSvg from '../../assets/icons/enter.svg';
import enterEmptySvg from '../../assets/icons/emptyEnter.svg';
import './InputForm.styles.scss';
import { useState } from 'react';

const InputForm = () => {
    const [inputStatus, setInputStatus] = useState(false);

    return <section className="input">
            <div  className="input_container">
                <form action="#" method='post'>
                    <textarea className='textarea_input' type="text" placeholder='Enter text message' onChange={(event) => {
                        const texArea = document.querySelector(`.${event.target.classList}`);
                        texArea.style.cssText = 'height:auto; padding:0';
                        texArea.style.cssText = 'height:' + texArea.scrollHeight + 'px';
                        texArea.value.length > 0 ? setInputStatus(true) : setInputStatus(false);
                    }} />
                    {inputStatus ? 
                        <button>
                            <img src={enterSvg} alt="submit_post" onClick={() => console.log('clicked')}/>
                        </button>
                    :
                    <button>
                        <img src={enterEmptySvg} alt="submit_post" onClick={() => console.log('clicked')}/>
                    </button>
                    }
                </form>
            </div>
        </section>;
}

export default InputForm;