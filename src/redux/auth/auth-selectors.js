const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserEmail = state => state.auth.user.data.email;
const getUserAvatar = state => state.auth.user.data.avatarURL;
const getIsFetchingCurrentUser = state => state.auth.isFeatchingCurrentUser;

const authSelectors = {
    getIsLoggedIn,
    getUserEmail,
    getIsFetchingCurrentUser,
    getUserAvatar
};

export default authSelectors;