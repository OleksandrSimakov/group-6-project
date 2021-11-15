import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit'
import transactionsActions from './transactions-actions'
import { format } from 'date-fns'

const transactions = createReducer(
  {},
  {
    [transactionsActions.getExpenseByDateSuccess]: (_, { payload }) =>
      payload.transactions.reverse(),
    [transactionsActions.getIncomeByDateSuccess]: (_, { payload }) =>
      payload.transactions.reverse(),
  }
)
const getLast = createReducer([], {
  [transactionsActions.getLastSuccess]: (state, { payload }) =>
    payload.transactions,
})

const initialDate = format(new Date(), 'yyyy-MM-dd')

const selectedDate = createReducer(initialDate, {
  [transactionsActions.setDate]: (_, { payload }) => payload,
})

const isLoading = createReducer(false, {
  [transactionsActions.addExpenseRequest]: () => true,
  [transactionsActions.addExpenseSuccess]: () => false,
  [transactionsActions.addExpenseError]: () => false,
  [transactionsActions.addIncomeRequest]: () => true,
  [transactionsActions.addIncomeSuccess]: () => false,
  [transactionsActions.addIncomeError]: () => false,
  [transactionsActions.getExpenseByDateRequest]: () => true,
  [transactionsActions.getExpenseByDateSuccess]: () => false,
  [transactionsActions.getExpenseByDateError]: () => false,
  [transactionsActions.getIncomeByDateRequest]: () => true,
  [transactionsActions.getIncomeByDateSuccess]: () => false,
  [transactionsActions.getIncomeByDateError]: () => false,
  [transactionsActions.getLastRequest]: () => true,
  [transactionsActions.getLastSuccess]: () => false,
  [transactionsActions.getLastError]: () => false,
  [transactionsActions.deleteTransactionRequest]: () => true,
  [transactionsActions.deleteTransactionSuccess]: () => false,
  [transactionsActions.deleteTransactionError]: () => false,
})

export default combineReducers({
  transactions,
  selectedDate,
  isLoading,
  getLast,
})
// import { createReducer } from '@reduxjs/toolkit'
// import { combineReducers } from 'redux'
// import transactionActions from './transactions-actions'
// // const deleteUserTransaction = createReducer([], {
// //   [transactionsActions.deleteUserTransactionSuccess]: (state, { payload }) =>
// //     state.filter(({ id }) => id !== payload),
// // })

// const addTransaction = createReducer([], {
//   [transactionActions.addTransactionSuccess]: (state, { payload }) => [...state, payload],
// })

// const deleteTransaction = createReducer([], {
//   [transactionActions.deleteUserTransactionSuccess]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// })

// const setDateValue = createReducer('', {
//   [transactionActions.setCurrentDateValue]: (_, { payload }) => payload,
// })

// const resetValuesOfInput = createReducer(0, {
//   [transactionActions.resetInputValues]: (state, { payload }) =>
//     state + payload,
// })

// export default combineReducers({
//   addTransaction,
//   deleteTransaction,
//   setDateValue,
//   resetValuesOfInput,
// })
