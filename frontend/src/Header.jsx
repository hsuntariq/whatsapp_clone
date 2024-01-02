import { BiSolidUserCircle } from 'react-icons/bi'
// import {FaUserGroup} from 'react-icons/fa'
import { BsChatLeftTextFill } from 'react-icons/bs'
import { MdGroup } from 'react-icons/md';
import { FaEllipsisV } from 'react-icons/fa';
import { FiCircle } from 'react-icons/fi';
import { AiOutlineLoading } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { MdFilterList } from 'react-icons/md';
import { FiArrowRight } from 'react-icons/fi';
import { useRef } from 'react';
import { logout } from './features/auth/authSlice';

const Header = ({ focus, setFocus }) => {
  const { user } = useSelector(state => state.auth);
  const list = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showList = () => {
    list.current.classList.toggle('show-settings');
  }

  return (
    <>
      <div className="container" style={{ position: 'sticky', top: '0', width: '410px' }}>
        <div className="header" >
          <div className="avatar">
            {user?.photo ? (
              <img style={{ width: '50px', height: '50px', borderRadius: '50%' }} src={user?.photo} alt="" />
            ) : (<BiSolidUserCircle />)}
          </div>
          <div className="icons" >
            <BsChatLeftTextFill />
            <MdGroup />
            <Link to={`/status/${user?._id}`} style={{ color: 'white', textDecoration: 'none' }}>

              <div className="status-icons" style={{ position: 'relative', marginRight: '1rem' }}>
                <AiOutlineLoading className='icon icon1' style={{ position: 'absolute' }} />
                <AiOutlineLoading className='icon icon2' style={{ position: 'absolute' }} />
                <AiOutlineLoading className='icon icon3' style={{ position: 'absolute' }} />
              </div>
            </Link>
            <div className="menu-user">
              <FaEllipsisV onClick={showList} cursor='pointer' />
              <div className="menu-user-info" ref={list}>
                <ul>
                  <li>Settings</li>
                  <li onClick={() => {
                    dispatch(logout())
                    navigate('/register');
                  }}>Logout</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
        <section className="search-section">
          <div className="search-bar">
            {focus ? (
              <span style={{ color: '#00A884', transition: 'all 0.25s', rotate: '180deg', fontSize: '1.5rem', alignSelf: 'flex-start' }}>{<FiArrowRight />}</span>
            ) : (
              <span style={{ color: '#697881', transition: 'all 0.25s', rotate: '0deg' }}>{<FaSearch />}</span>

            )}
            <input onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} type="text" placeholder={focus ? '' : 'Search or start a new chat'} className="search" />
          </div>
          <div className="filter">
            {<MdFilterList />}
          </div>
        </section>
      </div>
    </>
  )
}

export default Header
