import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/auth/authSlice'
import chatSlice from '../features/chat/chatSlice'
export default configureStore({
  reducer: {
    auth:authSlice,
    chat:chatSlice,
  }
})