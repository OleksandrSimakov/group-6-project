import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import transactionActions from './transactions-actions'
// const deleteUserTransaction = createReducer([], {
//   [transactionsActions.deleteUserTransactionSuccess]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// })

const addTransaction = createReducer([], {
  [transactionActions.addTransactionSuccess]: (state, { payload }) => [...state, payload],
})

const deleteTransaction = createReducer([], {
  [transactionActions.deleteUserTransactionSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
})

const setDateValue = createReducer('', {
  [transactionActions.setCurrentDateValue]: (_, { payload }) => payload,
})

const resetValuesOfInput = createReducer(0, {
  [transactionActions.resetInputValues]: (state, { payload }) =>
    state + payload,
})

export default combineReducers({
  addTransaction,
  deleteTransaction,
  setDateValue,
  resetValuesOfInput,
})
