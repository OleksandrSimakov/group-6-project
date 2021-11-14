import { createSlice } from '@reduxjs/toolkit'
import authOperations from './auth-operations'

const initialState = {
  user: { name: null, email: null, token: null },
  isLoggedIn: false,
  isFeatchingCurrentUser: false,
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled]: (state, action) => {
      state.user = action.payload.user
      state.user.token = action.payload.token
      state.isLoggedIn = true
      state.isAuthenticated = false
    },

    [authOperations.logIn.fulfilled]: (state, action) => {
      state.user = action.payload.user
      state.user.token = action.payload.user.token
      state.isLoggedIn = true
      state.isAuthenticated = true
    },

    [authOperations.logOut.fulfilled]: (state) => {
      state.user = { name: null, email: null, token: null }
      state.user.token = null
      state.isLoggedIn = false
      state.isAuthenticated = false
    },

    [authOperations.fetchCurrentUser.pending]: (state) => {
      state.isFeatchingCurrentUser = true
    },

    [authOperations.fetchCurrentUser.fulfilled]: (state, action) => {
      state.user = action.payload.user
      state.isLoggedIn = true
      state.isFeatchingCurrentUser = false
      state.isAuthenticated = true
    },

    [authOperations.fetchCurrentUser.rejected]: (state) => {
      state.isFeatchingCurrentUser = false
      state.isAuthenticated = false
    },
  },
})

const authReducer = authSlice.reducer

export default authReducer
