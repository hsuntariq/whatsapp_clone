import React from 'react'
import { FaEllipsisV, FaSearch } from 'react-icons/fa'
import './assets/styles.css'
import { data } from './data'
import { useParams } from 'react-router-dom'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { getAllUsers, reset } from "./features/auth/authSlice"
const UserHeader = () => {
  const { allUsers, isLoading, isError, message } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    try {
      dispatch(getAllUsers());
    } catch (error) {
      toast(error);
    }
    dispatch(reset());
  }, [dispatch, isError, message]);
    const {id} = useParams();
    
    const user = allUsers?.find(user => user._id === id);
  return (
    <>
          <div className="header" style={{minWidth:'max-content'}} >
              <div className="left" style={{margin:'0'}}>
                  <div className="image" style={{height:'50px'}}>
                      <img  src={user?.photo}alt="" />
                  </div>
                  <div className="number">
                      {user?.username}
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
