import axios from 'axios'
import transactionActions from './transactions-actions'
import toast from 'react-hot-toast'
// import { createAsyncThunk } from '@reduxjs/toolkit'
// import * as transactionsAPI from '../../services/transactions-api'

export const expenseOptions = {
  products: 'Продукты',
  alcohol: 'Алкоголь',
  entertainment: 'Развлечения',
  health: 'Здоровье',
  transport: 'Транспорт',
  housing: 'Всё для дома',
  technique: 'Техника',
  utilityCommunication: 'Коммуналка, связь',
  sportsHobbies: 'Спорт, хобби',
  education: 'Образование',
  other: 'Прочее',
}

axios.defaults.baseURL = 'https://kapusta-pro.herokuapp.com/'

const addTransaction = (endpoint, transaction) => async (dispatch) => {
  dispatch(transactionActions.addIncomeRequest())

  try {
    await axios.post(endpoint, transaction)
  } catch (error) {
    dispatch(transactionActions.addIncomeError(error.message))
    toast.error(error.response.message)
  }
}
const deleteTransaction = (transactionId) => async (dispatch) => {
  dispatch(transactionActions.deleteUserTransactionRequest())
  try {
    const response = await axios.delete(`/api/transactions/${transactionId}`)

    await dispatch(
      transactionActions.deleteUserTransactionSuccess(transactionId)
    )
    // await dispatch(userActions.setCurrentBalanceSuccess(response.data.balance))
    await dispatch(
      transactionActions.getUserTransactionsByYearSuccess(response.data.ledger)
    )
  } catch (error) {
    dispatch(transactionActions.deleteUserTransactionError(error.message))
    toast.error(error.response.message)
  }
}

// const addUserTransaction = createAsyncThunk(
//   'transactions/addUserExpense',
//   async (newTransaction) => {
//     const transactions = await transactionsAPI.addUserTransaction(
//       newTransaction
//     )
//     return transactions
//   }
// )

// const deleteTransaction = createAsyncThunk(
//   'contacts/deleteTransaction',
//   async (transactionId) => {
//     await transactionsAPI.deleteTransaction(transactionId)
//     return transactionId
//   }
// )

const transactionOperations = { addTransaction, deleteTransaction }
export default transactionOperations
