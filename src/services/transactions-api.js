import axios from 'axios'

axios.defaults.baseURL = 'https://kapusta-pro.herokuapp.com/'

export const addTransactionApi = async (transaction) => {
  const { data } = await axios.post('api/transactions/addIncome', transaction)

  return data.data
}

export const deleteTransaction = (transactionId) => {
  return axios
    .delete(`transactions/${transactionId}`)
    .then(({ data }) => data)
    .catch((error) => {
      throw error
    })
}

export const endpoints = {
  income: 'api/transactions/addIncome',
  expense: 'api/transactions/addExpense',
}

// function addUserTransaction(endpoint, transaction) {
//   return axios.post(endpoint, transaction)
// }

// function deleteTransaction(transactionId) {
//   return axios.delete(`api/transactions/:${transactionId}`)
// }

// export const transactionsApi = { addTransaction, deleteTransaction }
