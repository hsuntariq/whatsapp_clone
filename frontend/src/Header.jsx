import {BiSolidUserCircle} from 'react-icons/bi'
// import {FaUserGroup} from 'react-icons/fa'
// import {BsFillChatLeftTextFill} from 'react-icons/bs'
import { BsChatLeftTextFill } from 'react-icons/bs'
import { FaUserGroup } from 'react-icons/fa'
const Header = () => {
  return (
    <>
         <div className="header">
            <div className="avatar">
                <BiSolidUserCircle/>
            </div>
            <div className="icons">
                  <BsChatLeftTextFill />
            </div>
         </div>
    </>
  )
}

export default Header
