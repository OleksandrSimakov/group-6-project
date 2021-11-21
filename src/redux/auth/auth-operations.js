import { createAsyncThunk } from '@reduxjs/toolkit'
import * as authAPI from '../../services/auth-api'

const register = createAsyncThunk(
  'api/auth/signup',
  async (newUser, { rejectWithValue }) => {
    // console.log(`newUser in auth-operation`, newUser)
    try {
      const data = await authAPI.postSignUp(newUser)
      // console.log(`data in auth-operation`, data)
      return data
    } catch (error) {
      console.log(`error.messageRegister`, error)
      return rejectWithValue(error.message)
    }
  },
)

const logIn = createAsyncThunk(
  'api/auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const data = await authAPI.postLogIn(user)
      // console.log(`data in auth-operation`, data)
      return data
    } catch (error) {
      // console.log(`error.messageLogIn`, error)
      return rejectWithValue(error.message)
    }
  },
)

const logOut = createAsyncThunk(
  'api/auth/logout',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await authAPI.postLogOut(credentials)
      // console.log(`data in auth-operation`, data)
      return data
    } catch (error) {
      console.log(`error.messageInLogOut`, error)
      return rejectWithValue(error.message)
    }
  },
)

const userFromGoogleAuth = createAsyncThunk('/google-redirect',
  async (email, { rejectWithValue }) => {
    try {
      const data = await authAPI.getGoogleUser(email)
      console.log(`data in auth-operation`, data)
      return data
    } catch (error) {
      console.log(`error in auth-operation`, error)
      return rejectWithValue(error.message)
    }
  },
)

const fetchCurrentUser = createAsyncThunk(
  'api/auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState()
    // console.log(`state`, state)
    const persistedToken = state.auth.token

    try {
      if (persistedToken === null) {
        return thunkAPI.rejectWithValue()
      }
      authAPI.token.set(persistedToken)
      const currentUser = await authAPI.getCurrentUser()
      return currentUser
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
  userFromGoogleAuth,
}

export default authOperations
