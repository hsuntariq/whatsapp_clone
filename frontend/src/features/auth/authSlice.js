import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";
    import {
    authService
} from "./authService";

// get the user from t he local storage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
    allUsers: [],
    statuses:[],
}


// handle the registration

export const registerUser = createAsyncThunk('auth/register', async (userData, thunkApi) => {
    try {

        return await authService.registerUser(userData);
    } catch (error) {
       const message = (error.response && error.response.data && error.response.data.message) ||
            error.message || error.toString();
        return thunkApi.rejectWithValue(message);
    }
})

// get the users
export const getAllUsers = createAsyncThunk('auth/get-users', async (_, thunkApi) => {
    try {
        return await authService.getAllUsers();
    } catch (error) {
       const message = (error.response && error.response.data && error.response.data.message) ||
            error.message || error.toString();
        return thunkApi.rejectWithValue(message);
    }
})

export const getStatuses = createAsyncThunk('auth/get-status',async(_,thunkApi)=>{
    try{
        return await authService.getStatuses()
    }catch(error){
        const message = (error.response && error.response.data && error.response.data.message) ||
            error.message || error.toString();
        return thunkApi.rejectWithValue(message);
    }
})

export const addStatus = createAsyncThunk('auth/add-status', async (status,id, thunkApi) => {
    try {
        return await authService.addStatus(status,id);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkApi.rejectWithValue(message);
    }
})


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(registerUser.rejected, (state, action) => {
                    state.user = null;
                    state.isLoading = false;
                    state.isSuccess = false;
                    state.isError= true;
                    state.message = action.payload
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(getAllUsers.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                    state.isLoading = false;
                    state.isSuccess = false;
                    state.isError= true;
                    state.message = action.payload
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.allUsers = action.payload;
            })
            .addCase(getStatuses.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getStatuses.rejected, (state, action) => {
                    state.isLoading = false;
                    state.isSuccess = false;
                    state.isError= true;
                    state.message = action.payload
            })
            .addCase(getStatuses.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.statuses = action.payload;
            })
            .addCase(addStatus.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addStatus.rejected, (state, action) => {
                    state.isLoading = false;
                    state.isSuccess = false;
                    state.isError= true;
                    state.message = action.payload
            })
            .addCase(addStatus.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.statuses = action.payload;
            })
    }
})


export const {
    reset
} = authSlice.actions;
export default authSlice.reducer;