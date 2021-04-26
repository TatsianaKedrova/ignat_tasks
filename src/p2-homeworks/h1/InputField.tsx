import React, {useState} from 'react';
import classes from './InputField.module.css';


const InputField = () => {

    const[inputValue, setInputValue] = useState()

    return (
        <div>
            <input type="text" placeholder={"type your message here..."} className={classes.inputBorder}/>
            <button>Send</button>
        </div>
    )
}

export default InputField;