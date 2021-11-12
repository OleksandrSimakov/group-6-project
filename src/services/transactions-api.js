import axios from 'axios'

axios.defaults.baseURL = 'https://kapusta-pro.herokuapp.com/'

export const endpoints = {
  income: 'api/transactions/addIncome',
  expense: 'api/transactions/addExpense',
}

function addUserTransaction(endpoint, transaction) {
  return axios.post(endpoint, transaction)
}

function deleteTransaction(transactionId) {
  return axios.delete(`api/transactions/:${transactionId}`)
}

export { addUserTransaction, deleteTransaction }
