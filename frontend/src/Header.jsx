import {BiSolidUserCircle} from 'react-icons/bi'
// import {FaUserGroup} from 'react-icons/fa'
import { BsChatLeftTextFill } from 'react-icons/bs'
import { MdGroup } from 'react-icons/md';
import { FaEllipsisV } from 'react-icons/fa';
import { FiCircle } from 'react-icons/fi';

const Header = () => {
  return (
    <>
         <div className="header">
            <div className="avatar">
          <BiSolidUserCircle />
            </div>
            <div className="icons">
                  <BsChatLeftTextFill />
                  <MdGroup/>
                  <FiCircle/>
                  <FaEllipsisV/>
            </div>
         </div>
    </>
  )
}

export default Header
