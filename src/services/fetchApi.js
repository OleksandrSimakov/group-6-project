import axios from 'axios'

axios.defaults.baseURL = 'https://kapusta-pro.herokuapp.com/'

const getTransactionsByPeriod = (period) => axios.get(`/transaction/${period}`)
const setBalance = (balance) => axios.patch('/users/balance', { balance })

const fetch = {
  getTransactionsByPeriod,
  setBalance,
}
export { fetch }
