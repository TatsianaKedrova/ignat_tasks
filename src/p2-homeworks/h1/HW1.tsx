import React, {useState} from 'react';
import Message from './Message';
// import InputField from './InputField';


export type MessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}
/*const messageData =  {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Tatiana',
    message: 'some text',
    time: '22:00'
}*/

function HW1() {

    const [messages, setMessages] = useState<Array<MessageType>>([]);
    let time = new Date();
    let messageCurrentTime = time.toLocaleTimeString();

    function addMessage(message: string) {
        const newMessage: MessageType = {
            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
            name: 'Tatiana',
            message: message,
            time: messageCurrentTime
        }
        setMessages([...messages, newMessage])
    }

    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                messages = {messages}
                addMessage = {addMessage}
            />

            {/*<InputField />*/}

                {/*avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            */}

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
