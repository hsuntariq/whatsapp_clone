import { Container } from 'react-bootstrap'
import './assets/styles.css'
import Header from './Header'
import { FaSearch } from 'react-icons/fa';
import { MdFilterList } from 'react-icons/md';
import { FiArrowRight } from 'react-icons/fi';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getAllUsers, reset } from './features/auth/authSlice';
import { addChat } from './features/chat/chatSlice';

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
  return (
    <>
      <Container className='sidebar'>
        <Header />
        <section className="search-section">
          <div className="search-bar">
            {focus ? (
                <span style={{color:'#00A884',transition:'all 0.25s',rotate:'180deg',fontSize:'1.5rem',alignSelf:'flex-start'}}>{<FiArrowRight/>}</span>
            ): (
                <span style={{color:'#697881',transition:'all 0.25s',rotate:'0deg'}}>{<FaSearch/>}</span>

            )}
            <input onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}  type="text" placeholder= {focus ? '' : 'Search or start a new chat'} className="search" />
          </div>
          <div className="filter">
            {<MdFilterList />}
          </div>
        </section>
        {isLoading ? (
          <h1>Loading</h1>
        ): (
          allUsers?.map((person) => {
            return (
            <>
              <Link onClick={()=>addChats(person._id)} key={person.id} to={`/message/${person._id}`} style={{color:'white',textDecoration:'none'}}>
              <div  className="item">
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
