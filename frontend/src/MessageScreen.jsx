import { useParams } from "react-router-dom"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import UserHeader from "./UserHeader"


const MessageScreen = () => {
  
  return (
    <main>
        <Sidebar/> 
          <div className="message-screen">
              <UserHeader />
            <Footer/>
        </div>
    </main>
  )
}

export default MessageScreen
