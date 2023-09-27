import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import chatService from './chatService';

const initialState = {
    chats: [],
    c_isLoading: false,
    c_isError: false,
    c_isSuccess: false,
    c_message:''
}

export const addChat = createAsyncThunk('chat/add-chat', async (data, thunkApi) => {
    try {
        return chatService.addChat(data);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkApi.rejectWithValue(message)
    }
})
export const addMessage = createAsyncThunk('chat/add-message', async (data, thunkApi) => {
    try {
        return chatService.addMessage(data);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkApi.rejectWithValue(message)
    }
})

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        reset: (state) => {
            state.c_isLoading = false;
            state.c_isSuccess = false;
            state.c_isError = false;
            state.c_message = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addChat.pending, (state) => {
                state.c_isLoading = true
            })
            .addCase(addChat.rejected, (state, action) => {
                state.c_isLoading = false;
                state.c_isError = true;
                state.c_message = action.payload;
            })
            .addCase(addChat.fulfilled, (state, action) => {
                state.c_isLoading = false;
                state.c_isSuccess = true;
                state.chats = action.payload;
        })
            .addCase(addMessage.pending, (state) => {
                state.c_isLoading = true
            })
            .addCase(addMessage.rejected, (state, action) => {
                state.c_isLoading = false;
                state.c_isError = true;
                state.c_message = action.payload;
            })
            .addCase(addMessage.fulfilled, (state, action) => {
                state.c_isLoading = false;
                state.c_isSuccess = true;
                state.chats = action.payload;
        })
    }

})

export const { reset } = chatSlice.actions
export default chatSlice.reducer