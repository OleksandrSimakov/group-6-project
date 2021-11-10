import { createReducer } from '@reduxjs/toolkit'
// import transactionsActions from './transactions-actions'
import {
  addUserTransaction,
  deleteTransaction,
} from './transactions-operations'
// const deleteUserTransaction = createReducer([], {
//   [transactionsActions.deleteUserTransactionSuccess]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// })

const transactions = createReducer([], {
  [addUserTransaction.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteTransaction.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
})

export default transactions
