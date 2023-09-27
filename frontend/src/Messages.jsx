import { useEffect,useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const Messages = () => {
    const { chats, c_isLoading } = useSelector(state => state.chat);
    const { user } = useSelector(state => state.auth);
    // useEffect(() => {
    //     dispatch
    // })
    const { id } = useParams()
    // console.log(id === user?._id)

      const chatContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom when messages change
    scrollToBottom();
  }, [chats]);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };
    return (
        <>
            <div className="messages" ref={chatContainerRef} >
                {chats?.chat?.map((chat) => {
                    return <> <div className={`${id === chat?.sender_id ? 'received' : 'sent'} `}>
                        <p  key={chat._id}>{chat.message} </p>        
                        <div style={{fontSize:'0.7rem',color:'lightgray',textAlign:'right'}}>
                          {chat?.time}
                        </div>                    
                            
                            </div>
                    </>
                })}
                {/* {console.log(chats.chat)} */}
            </div> 
        </>
    )
}

export default Messages;