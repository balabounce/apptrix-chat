import enterSvg from '../../assets/icons/enter.svg';
import enterEmptySvg from '../../assets/icons/emptyEnter.svg';
import './InputForm.styles.scss';

const InputForm = () => {
    return <section className="input">
            <div  className="input_container">
                <form action="#" method='post'>
                    <textarea  contentEditable className='textarea_input' type="text" placeholder='Enter text message' onChange={(event) => {
                        const texArea = document.querySelector(`.${event.target.classList}`);
                        texArea.style.cssText = 'height:auto; padding:0';
                        texArea.style.cssText = 'height:' + texArea.scrollHeight + 'px';
                    }} />
                    <button type='submit'>
                        <img src={enterEmptySvg} alt="submut_post" />
                    </button>
                </form>
            </div>
        </section>;
}

export default InputForm;