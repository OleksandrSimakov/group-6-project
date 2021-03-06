import axios from 'axios'

// axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.baseURL = 'https://kapusta-pro.herokuapp.com/'

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common.Authorization = ''
  },
}

export async function postSignUp(newUser) {
  const { data } = await axios.post(`api/auth/signup`, newUser)
  // console.log(`data in auth-api`, data)
  return data
}

export async function postLogIn(user) {
  const { data } = await axios.post(`api/auth/login`, user)
  token.set(data.user.token)
  return data
}

export async function postLogOut() {
  const { data } = await axios.get(`api/auth/logout`)
  token.unset()
  return data
}

export async function getCurrentUser() {
  const { data } = await axios.get(`api/auth/current`)
  return data
}

export async function getGoogleUser(email) {
  const { data } = await axios.get(`api/auth/${email}`)
  token.set(data.user.token)
  return data
}
