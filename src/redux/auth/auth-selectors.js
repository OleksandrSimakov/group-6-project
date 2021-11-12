const getIsLoggedIn = (state) => state.auth.isLoggedIn
const getUserEmail = (state) => state.auth.user.email
const getIsFetchingCurrentUser = (state) => state.auth.isFeatchingCurrentUser

const getIsAuthenticated = (state) => state.auth.isAuthenticated

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getIsFetchingCurrentUser,
  getIsAuthenticated,
}

export default authSelectors
