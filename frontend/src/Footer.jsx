import { useState } from 'react'
import { BsEmojiLaughing,BsPlusLg,BsFillMicFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from './features/chat/chatSlice';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:3001')

const Footer = () => {
  const [message, setMessage] = useState('');
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const { id } = useParams();
  const sendMessage = () => {
    socket.emit( ); 
    const data = {
      message, receiver_id: id, sender_id: user._id,
    };
    // console.log(data)
    dispatch(addMessage(data));
    setMessage('')
  }
  return (
    <>
        <footer>      
            <div className="emojis">
                <BsEmojiLaughing/>
                <BsPlusLg/>
            </div>
              <div className="message" style={{display:'flex',alignItems:'center'}}>
                  <input value={message} onChange={(e)=>setMessage(e.target.value)} type="text" placeholder='Type a message' />
                  <span onClick={sendMessage} style={{cursor:'pointer'}}>Send</span>
            </div>
              <div className="voice">
                  <BsFillMicFill/>
            </div>
        </footer>
    </>
  )
}

export default Footer
