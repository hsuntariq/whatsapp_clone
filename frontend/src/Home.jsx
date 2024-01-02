import { useDispatch, useSelector } from 'react-redux';
import MessageBar from './MessageBar'
import Sidebar from './Sidebar'
import './assets/styles.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { reset } from './features/auth/authSlice';
import { toast } from 'react-toastify';
const Home = () => {
  const { user, isError, message } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      navigate('/register')
    }
  }, [navigate, user])
  return (
    <>
      <main>
        <Sidebar />
        <MessageBar />
      </main>
    </>
  )
}

export default Home
