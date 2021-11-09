import axios from 'axios'

axios.defaults.baseURL = 'https://back-group-6-test.herokuapp.com/'

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common.Authorization = ''
  },
}

export async function postSignUp(newUser) {
  const { data } = await axios.post(`api/auth/signup`, newUser);
  console.log(`data`, data);
  token.set(data.token);
  return data;
}

export async function postLogIn(user) {
  const { data } = await axios.post(`api/auth/login`, user);
  token.set(data.token);
  return data;
}

export async function postLogOut() {
  const { data } = await axios.post(`api/auth/logout`);
  token.unset();
  return data;
}

export async function getCurrentUser() {
  const { data } = await axios.get(`api/auth/current`);
  return data;
}

export async function getGoogleAuth() {
  const { data } = await axios.get(`api/auth/google`);
  token.set(data.token);
  return data;
}
=======
  const { data } = await axios.post(`users/signup`, newUser)
  console.log(`data`, data)
  token.set(data.token)
  return data
}

export async function postLogIn(user) {
  const { data } = await axios.post(`users/login`, user)
  token.set(data.token)
  return data
}

export async function postLogOut() {
  const { data } = await axios.post(`users/logout`)
  token.unset()
  return data
}

export async function getCurrentUser() {
  const { data } = await axios.get(`users/current`)
  return data
}
