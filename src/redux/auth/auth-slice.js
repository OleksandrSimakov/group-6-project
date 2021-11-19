import { createSlice } from '@reduxjs/toolkit'
import authOperations from './auth-operations'

const initialState = {
  user: { email: null, avatarURL: null },
  token: null,
  isLoggedIn: false,
  isFeatchingCurrentUser: false,
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled]: (state, action) => {
      state.user.email = action.payload.user.data.email
      state.isLoggedIn = false
      state.isAuthenticated = false
    },

    [authOperations.logIn.fulfilled]: (state, action) => {
      state.user.email = action.payload.user.email
      state.user.avatarURL = action.payload.user.avatarURL
      state.token = action.payload.user.token
      state.isLoggedIn = true
      state.isAuthenticated = true
    },

    [authOperations.logOut.fulfilled]: (state) => {
      state.user.email = null
      state.user.avatarURL = null
      state.token = null
      state.isLoggedIn = false
      state.isAuthenticated = false
    },

    [authOperations.fetchCurrentUser.pending]: (state) => {
      state.isFeatchingCurrentUser = true
      state.isAuthenticated = true
    },

    [authOperations.fetchCurrentUser.fulfilled]: (state, action) => {
      state.user.email = action.payload.user.data.email
      state.user.avatarURL = action.payload.user.data.avatarURL
      state.isLoggedIn = true
      state.isFeatchingCurrentUser = false
      state.isAuthenticated = true
    },

    [authOperations.fetchCurrentUser.rejected]: (state) => {
      state.isFeatchingCurrentUser = false
      state.isAuthenticated = false
    },

    [authOperations.userFromGoogleAuth.fulfilled]: (state, action) => {
      state.user.email = action.payload.user.email
      state.user.avatarURL = action.payload.user.avatarURL
      state.token = action.payload.user.token
      state.isLoggedIn = true
      state.isAuthenticated = true
    },
  },
})

const authReducer = authSlice.reducer

export default authReducer
