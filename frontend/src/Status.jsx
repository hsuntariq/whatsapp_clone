import { BiArrowBack } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

import {Link, useParams} from 'react-router-dom'
import { data } from './data';
const Status = () => {
    const { id } = useParams();
    const user = data.find(user => user?.id === id);
  return (
    <>
        <div className="status-screen">
              <div className="overlay">
                  <Link to='/status' style={{color:'white',textDecoration:'none'}}>
                  <BiArrowBack style={{fontSize:'2rem',position:'absolute',top:'10px',left:'20px'}} />
                  </Link>
                  <Link to='/' style={{color:'white',textDecoration:'none'}}>
                      <AiOutlineClose style={{ fontSize: '2rem', position: 'absolute', right: '20px', top: '10px' }} />
                      </Link>
                  <div className="status-image">
                    <div className="user-status-details">
                        <div className="user-image">
                            <img src={user?.image} alt="" />
                        </div>
                        <div className="user-name">
                                <h4>{user?.name}</h4>
                                <p>{user?.time}</p>
                        </div>
                      </div>
                    <img src="https://plus.unsplash.com/premium_photo-1672136996764-96ad5bf50a8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8&w=1000&q=80" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Status
