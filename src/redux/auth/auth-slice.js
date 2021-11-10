import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
    user: { /*name: null,*/ email: null },
    token: null,
    isLoggedIn: false,
    isFeatchingCurrentUser: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.register.fulfilled]: (state, action) => {
            // console.log(`action`, action);
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        
        [authOperations.logIn.fulfilled]: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        
        [authOperations.logOut.fulfilled]: (state) => {
            state.user={ /*name: null,*/ email: null };
            state.token=null;
            state.isLoggedIn=false;
        },
         
        [authOperations.fetchCurrentUser.pending]: (state) => {
            state.isFeatchingCurrentUser=true;
        },
    
        [authOperations.fetchCurrentUser.fulfilled]: (state, action) => {
            state.user=action.payload;
            state.isLoggedIn=true;
            state.isFeatchingCurrentUser=false;
        },
        
        [authOperations.fetchCurrentUser.rejected]: (state) => {
            state.isFeatchingCurrentUser=false;
        }
    },
});

const authReducer = authSlice.reducer;

export default authReducer;
