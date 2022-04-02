import React,{useState} from 'react';
import { io } from 'socket.io-client';
import Chat from './components/chat/Chat';
import './app.css'
import Info from './components/info/Info';
import Room from './components/room/Room';

const socket = io.connect("https://unknowndevchatapp.herokuapp.com/")

   
const App = () => {


  const [username,setUsername] = useState('')
  const [room,setRoom] = useState('')
  const [showConv,setShowConv] = useState(false)


    return (
        <>
         { !showConv ? 
         <>
            <Info/>
            <Room socket={socket} setUsername={setUsername}
            setRoom={setRoom} setShowConv={setShowConv} username={username} room={room}  />
          </> :  <Chat socket={socket} username={username} room={room} /> }
        </>
    );
};

export default App;