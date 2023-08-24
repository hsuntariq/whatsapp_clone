import {BiSolidUserCircle} from 'react-icons/bi'
// import {FaUserGroup} from 'react-icons/fa'
import { BsChatLeftTextFill } from 'react-icons/bs'
import { MdGroup } from 'react-icons/md';
import { FaEllipsisV } from 'react-icons/fa';
import { FiCircle } from 'react-icons/fi';
import { AiOutlineLoading } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const { user } = useSelector(state => state.auth);

  return (
    <>
         <div className="header">
            <div className="avatar">
          { user?.photo ? (
            <img style={{width:'50px',height:'50px',borderRadius:'50%'}} src={user?.photo} alt="" />
          ):(<BiSolidUserCircle />)}
            </div>
            <div className="icons" >
                  <BsChatLeftTextFill />
                  <MdGroup/>
                  <Link to='/status' style={{color:'white',textDecoration:'none'}}>
                  
                  <div className="status-icons" style={{position:'relative',marginRight:'1rem'}}>
                    <AiOutlineLoading className='icon icon1' style={{position:'absolute'}} />
                    <AiOutlineLoading className='icon icon2' style={{position:'absolute'}}/>
                    <AiOutlineLoading className='icon icon3' style={{position:'absolute'}}/>
                  </div>
                  </Link>
                  <FaEllipsisV/>
            </div>
         </div>
    </>
  )
}

export default Header
