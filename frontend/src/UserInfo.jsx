import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { findUser } from './features/auth/authSlice';
import { GridLoader, HashLoader, MoonLoader, ScaleLoader } from 'react-spinners';
import { FaTimes } from 'react-icons/fa';

const UserInfo = ({ user_info, close }) => {
  const { userInfo, isLoading } = useSelector(state => state.auth);
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(userInfo)
  useEffect(() => {
    dispatch(findUser(id))
  }, [dispatch, id])
  return (
    <>

      <div ref={user_info} className="user-info">
        <FaTimes onClick={close} size={30} cursor='pointer' color='red' />
        {isLoading ? (
          <div className='loader'>
            <ScaleLoader color='#FF9100' size={60} />
          </div>
        ) : (
          <div className="user-profile">
            <img style={{ width: '200px', height: '200px', margin: '1rem auto', borderRadius: '50%' }} src={userInfo.photo} alt="" />
            <h4>{userInfo.username}</h4>
            <p style={{ color: 'gray' }}>+{userInfo.phone}</p>
          </div>
        )}

      </div>
    </>
  )
}

export default UserInfo
