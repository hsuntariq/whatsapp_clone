import { useParams } from "react-router-dom"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import UserHeader from "./UserHeader"
import Messages from "./Messages"
import { useEffect,useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:3001');
import { BsEmojiLaughing,BsPlusLg,BsFillMicFill } from 'react-icons/bs'
import { addMessage } from './features/chat/chatSlice';


const MessageScreen = () => {
  const [sentMessages, setSentMessages] = useState([]);
  const [recMessages, setRecMessages] = useState([]);
  const [message, setMessage] = useState('');
  const { chat } = useSelector(state => state.chat);
  const dispatch = useDispatch();
    const { chats, c_isLoading } = useSelector(state => state.chat);
    const { user } = useSelector(state => state.auth);
    // get the id and chat id from the params
    const { id,chat_id } = useParams()
  
  // receive the socket message
  useEffect(() => {
    socket.on('received_message', (data) => {
      setRecMessages([...recMessages,{message:data.message,id:Date.now(),sent:false}]);
    })
    // return () => {
    //   socket.off('received_message');
    // }
  }, [recMessages]);
    // console.log(id === user?._id)


 
  
  const sendMessage = () => {
    socket.emit('sent_message', {message:message,room:chat_id}); 
      setSentMessages([...sentMessages, {message:message,id:Date.now(),sent:true}]);
      setMessage('')
    const data = {
      message, receiver_id: id, sender_id: user._id,
    };
    // console.log(data)
    dispatch(addMessage(data));
  }
  
  const allMessages = [...sentMessages, ...recMessages].sort((a, b)=> {
  return a._id - b._id;
  })

    // console.log(allMessages);

  


   // scroll to the bottom
      
    const chatContainerRef = useRef(null);
  
  useEffect(() => {
    scrollToBottom();
  }, [chats]);


  function scrollToBottom() {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }

  

  return (
    <main>
        <Sidebar/> 
          <div className="message-screen">
        <UserHeader />
            <div className="messages" ref={chatContainerRef} >
                {/* {chats?.chat?.map((chat) => {
                    return <> <div className={`${id === chat?.sender_id ? 'received' : 'sent'} `}>
                        <p  key={chat._id}>{chat.message} </p>        
                        <div style={{fontSize:'0.7rem',color:'lightgray',textAlign:'right'}}>
                          {chat?.time}
                        </div>                    
                            
                            </div>
                    </>
                })} */}
          {allMessages.map((chat) => {
                    return <> <div className= {`${chat.sent ? 'sent':'received'}`} >
                        <p  key={chat._id}>{chat.message} </p>        
                        <div style={{fontSize:'0.7rem',color:'lightgray',textAlign:'right'}}>
                          {/* {chat?.time} */}
                        </div>                    
                            
                            </div>
                    </>
                })}
          

                {/* {console.log(chats.chat)} */}
        </div>             
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
        </div>
    </main>
  )
}

export default MessageScreen
