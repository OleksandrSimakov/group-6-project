import { createAsyncThunk } from '@reduxjs/toolkit'
import * as transactionsAPI from '../../services/transactions-api'

const addUserTransaction = createAsyncThunk(
  'transactions/addUserExpense',
  async (newTransaction) => {
    const transactions = await transactionsAPI.addUserTransaction(
      newTransaction
    )
    return transactions
  }
)

const deleteTransaction = createAsyncThunk(
  'contacts/deleteTransaction',
  async (transactionId) => {
    await transactionsAPI.deleteTransaction(transactionId)
    return transactionId
  }
)

export { addUserTransaction, deleteTransaction }
