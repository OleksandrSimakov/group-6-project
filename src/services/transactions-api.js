import axios from 'axios'

axios.defaults.baseURL = 'https://kapusta-pro.herokuapp.com/'

export const getBalanceApi = async (balance) => {
  // return axios.patch(`api/auth/balance`, balance)
  const { data } = await axios.patch(`api/auth/balance`)
  console.log(data)
  return data.user.balance
}

export const endpoints = {
  income: 'api/transactions/addIncome',
  expense: 'api/transactions/addExpense',
}
