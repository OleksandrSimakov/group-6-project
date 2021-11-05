import axios from 'axios'

axios.defaults.baseURL = 'https://kapusta-pro.herokuapp.com/'

const getTransactionsByPeriod = (period) => axios.get(`/transaction/${period}`)

const fetch = {
  getTransactionsByPeriod,
}
export { fetch }
