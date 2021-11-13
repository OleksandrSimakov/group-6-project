import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit'

import balanceActions from './balance-actions'

const initState = {
  balance: ' ',
}

const balance = createReducer(initState, {
  [balanceActions.getBalanceSuccess]: (_, { payload }) => payload,
  [balanceActions.addBalanceSuccess]: (_, { payload }) => payload,
})

export default combineReducers({
  balance,
})
