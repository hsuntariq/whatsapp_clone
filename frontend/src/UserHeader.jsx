import React from 'react'
import { FaEllipsisV, FaSearch } from 'react-icons/fa'
import './assets/styles.css'
import { data } from './data'
import { useParams } from 'react-router-dom'
const UserHeader = () => {
    const {id} = useParams();
    
    const user = data.find(user => user.id === id);
  return (
    <>
          <div className="header" style={{minWidth:'max-content'}} >
              <div className="left" style={{margin:'0'}}>
                  <div className="image" style={{height:'50px'}}>
                      <img  src={user?.image}alt="" />
                  </div>
                  <div className="number">
                      {user.name}
                  </div>
            </div>
              <div className="right">
                  <div className="icons">
                      <FaSearch/>
                      <FaEllipsisV/>
                  </div>
            </div>
          </div> 
    </>
  )
}

export default UserHeader
