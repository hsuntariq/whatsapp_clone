import { useParams } from "react-router-dom"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import UserHeader from "./UserHeader"
import Messages from "./Messages"


const MessageScreen = () => {
  
  return (
    <main>
        <Sidebar/> 
          <div className="message-screen">
              <UserHeader />
              <Messages/>
            <Footer/>
        </div>
    </main>
  )
}

export default MessageScreen
