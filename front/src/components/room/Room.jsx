import React from 'react';
import './room.css'

const Room = ({room,username,socket,setRoom,setUsername,setShowConv}) => {

    const joinRoom =()=>{
        if(username.trim().length && room.trim().length){
          setShowConv(true)
          socket.emit('join_room',room )
        }
      }

    return (
        <div className='room'>
            <form className='room_form' >
              <span className='title'>Join A Room </span>
              <input type="text" className='roomInput' placeholder='Enter your username...' 
              value={username} onChange={(e)=> setUsername(e.target.value)}/>
              <input type="text" className='roomInput' placeholder='Room Id...(tape anything)'
              value={room} onChange={(e)=>setRoom(e.target.value)} />
              <button className="submit-btn" onClick={joinRoom}>Start Chat</button>
            </form>
        </div>
    );
};

export default Room;