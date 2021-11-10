import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authAPI from '../../services/auth-api';

const register = createAsyncThunk('api/auth/signup',
    async (newUser, { rejectWithValue }) => {
        console.log(`newUser in auth-operation`, newUser);
    try {
        const data = await authAPI.postSignUp(newUser);
        console.log(`data in auth-operation`, data);
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const logIn = createAsyncThunk('api/auth/login',
    async (user, { rejectWithValue }) => {
    try {
        const data = await authAPI.postLogIn(user);
        console.log(`data in auth-operation`, data);
        return data;
    } catch (error) {
         return rejectWithValue(error.message);        
    }
});

const logOut = createAsyncThunk('api/auth/logout', async (credentials, { rejectWithValue }) => {
    try {
        const data = await authAPI.postLogOut(credentials);
        return data;
    } catch (error) {
         return rejectWithValue(error.message);
    }
});

const googleLogIn = createAsyncThunk('api/auth/login',
    async (_, { rejectWithValue }) => {
    try {
        const data = await authAPI.getGoogleAuth();
         console.log(`data`, data)
        return data;
    } catch (error) {
         return rejectWithValue(error.message);        
    }
});

const fetchCurrentUser = createAsyncThunk('api/auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
       
    try {
         if (persistedToken === null){
          return thunkAPI.rejectWithValue();
        }
        authAPI.token.set(persistedToken);
        const currentUser = await authAPI.getCurrentUser();
        return currentUser;
    } catch (error) {
       return thunkAPI.rejectWithValue(error.message);
    }
    
});

const authOperations = {
    register,
    logIn,
    logOut,
    fetchCurrentUser,
    googleLogIn
};

export default authOperations;