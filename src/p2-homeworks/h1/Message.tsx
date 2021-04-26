import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import { MessageType } from './HW1';
import classes from './Message.module.css';

type MessagePropsType = {
    messages: Array<MessageType>
    addMessage:(message: string) => void
}

const Message: React.FC<MessagePropsType> = (props) => {

    const [inputMessage, setInputMessage] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setInputMessage(e.currentTarget.value)}

    const addNewMessage = () => {
        const trimmedMessage = inputMessage.trim();
        if (trimmedMessage) {
            props.addMessage(inputMessage)

        } else {
            setError('Please enter your message!')
        }

        setInputMessage('');
    }

    const onKeyPressAddMessage = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") {
            addNewMessage();
        }
    }


    const messagePrinted = props.messages.map(message => {
        return(
            <div

                key={message.time}
                className={classes.container}>

                    <img
                        src={message.avatar}
                        alt={'avatar'}
                        style={{width: '100%'}}
                    />

                <div className={classes.messageAndTimeBlock}>
                    <p>{message.name}</p>
                    <p>{message.message}</p>
                    <span className={classes.timeRight}>{message.time}</span>
                </div>


            </div>
        )

    });
    return (
        <div>
            {messagePrinted}
            <div>
                <input
                    className={error ? classes.errorInput: classes.inputBorder}
                    type={"text"}
                    autoFocus
                    value={inputMessage}
                    onChange={handleChange}
                    onKeyPress={onKeyPressAddMessage}
                />
                <button onClick={addNewMessage}>Send</button>
                {error && <div className={classes.errorMessage}>{error}</div>}

            </div>
        </div>
    )
}

let timme = new Date();
let timmme = timme.toLocaleTimeString();


console.log(timmme);

export default Message;

/*
avatar={messageData.avatar}
name={messageData.name}
message={messageData.message}
time={messageData.time}*/








