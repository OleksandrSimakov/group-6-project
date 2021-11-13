const getIsLoggedIn = (state) => state.auth.isLoggedIn
const getUserEmail = (state) => state.auth.user.email
// const getUserAvatar = (state) => state.auth.user.avatarURL
const getIsFetchingCurrentUser = (state) => state.auth.isFeatchingCurrentUser
const getIsAuthenticated = (state) => state.auth.isAuthenticated

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getIsFetchingCurrentUser,
  // getUserAvatar,
  getIsAuthenticated,
}

export default authSelectors
