import React from 'react';
import './message.css'
const Message = ({own,message}) => {
    return (
        <div className={own?"message own":"message"}>
               <div className="message-top">
                   <p className="message-text">{message.text} </p>
               </div>
               <div className="messageBottom">
                   <span style={{fontWeight:"bold",marginRight:"5px"}}>{message.author} </span>
                   <span>{message.date} </span>
               </div>
        </div>
    );
};

export default Message;