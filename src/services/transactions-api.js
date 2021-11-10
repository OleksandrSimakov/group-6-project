import axios from 'axios'

axios.defaults.baseURL = 'https://kapusta-pro.herokuapp.com/'

function addUserTransaction(transaction) {
  return axios.post(`api/transactions/expense`, transaction)
}
function deleteTransaction(transactionId) {
  return axios.delete(`api/transactions/:${transactionId}`)
}

export { addUserTransaction, deleteTransaction }
