import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit'
import balanceActions from './balance-actions'

const current = createReducer(0, {
  [balanceActions.updateBalance]: (_, { payload }) => payload,
  // [balanceActions.getBalance]: (_, { payload }) => payload,
})

const currentExpenses = createReducer(0, {
  [balanceActions.updateCurrentExpenses]: (_, { payload }) => payload,
})

const currentIncomses = createReducer(0, {
  [balanceActions.updateCurrentIncomes]: (_, { payload }) => payload,
})

// const loading = createReducer(0, {
//   [balanceActions.setLoading]: (_, { payload }) => payload,
// })

export default combineReducers({
  current,
  // loading,
  currentExpenses,
  currentIncomses,
})
