import { Container } from 'react-bootstrap'
import './assets/styles.css'
import Header from './Header'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getAllUsers, reset } from './features/auth/authSlice';
import { addChat } from './features/chat/chatSlice';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:3001');  

const Sidebar = () => {
  const [focus, setFocus] = useState(false);
  const { user,allUsers, isLoading, isError, message } = useSelector(state => state.auth);
  const { chats, c_isLoading, c_isError, c_message } = useSelector(state => state.chat);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    try {
      dispatch(getAllUsers());
    } catch (error) {
      toast(error);
    }
    dispatch(reset());
  }, [dispatch, isError, message]);
  const addChats = (id) => {
    if (c_isError) {
      console.log(c_message)
    } else {
      const data = {
        sender_id: user._id,
        receiver_id:id
      }
      dispatch(addChat(data))
    }
    // alert(id)
  }

  console.log(chats);

  const connectChat = () => {
    // console.log(chats._id)
    socket.emit('join_room', {room:chats._id})
  }



  return (
    <>
      <Container className='sidebar'>
        <Header focus={focus} setFocus={setFocus} />
        
        {isLoading ? (
          <h1>Loading</h1>
        ): (
          allUsers?.map((person) => {
            return (
            <>
                <Link key={person._id} onClick={() => {
                  addChats(person._id);
                  connectChat();
              }} to={`/message/${person._id}/${chats?._id}`} style={{color:'white',textDecoration:'none'}}>
              <div  className="item" >
                <div className="left">

                <div className="image">
                  <img src={person?.photo} alt="" />
                  </div>
                
                <div className="details">
                  <h4>{person?.username}</h4>
                  {/* <p>{person.message}</p> */}
                </div>
                </div>

                <div className="time">
                  {/* <p>{person.time}</p> */}
                  {/* <h6 className='new-message'>{person.newMessage}</h6> */}
                </div>

              </div>
                </Link>

            </>
          )
        })
        )}
        
      </Container>
    </>
  )
}

export default Sidebar
