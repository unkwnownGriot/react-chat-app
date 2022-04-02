import React,{useState,useEffect,useRef} from 'react';
import Message from '../message/Message';
import './chat.css'
const Chat = ({username,socket,room}) => {
    const  [currentMessage,setCurrentMessage] = useState('')
    const  [messages,setMessages] = useState([])
    const scrollRef = useRef(null)
    useEffect(()=>{
        socket.on('receive_message',(data)=>{
            setMessages((m)=>[...m,data])
        })
    },[socket])
useEffect(()=>{
    scrollRef.current?.scrollIntoView({behavior:'smooth'})
})

    const sendMessage = async (e)=>{
        e.preventDefault()
        if(currentMessage.trim().length){
            const newMessage = {
                room,
                author:username,
                text:currentMessage,
                date: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
            }

            await socket.emit("send_message",newMessage)
            setMessages((m)=>[...m,newMessage])
          }
          setCurrentMessage('')
    }

    return (
        <div className='chat'>
            <form className="chat-wrapper" onSubmit={sendMessage}>
                <div className="chatTop">
                    <div className="chatTopLive">
                        <span className='liveText'>Live Chat</span>
                        <span className='badge'></span>
                    </div>
                    {
                        messages.map(message=>(
                           <div ref={scrollRef}>
                                <Message
                                own={username === message.author} message={message}/>
                           </div>
                        ))
                    }
                </div>
                <div className="chatBottom">
                    <input type="text" className='inputChat'
                    onChange={(e)=>setCurrentMessage(e.target.value)} value={currentMessage}
                    autoFocus placeholder='say something...' />
                    <button className='chatBtn' type='submit'>Send</button>
                </div>
            </form>
        </div>
    );
};

export default Chat;