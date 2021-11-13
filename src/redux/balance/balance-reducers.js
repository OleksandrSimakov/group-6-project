import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit'

import userBalanceActions from './balance-actions'

const balance = createReducer(0, {
  [userBalanceActions.getBalanceSuccess]: (_, { payload }) => payload,
  [userBalanceActions.addBalanceSuccess]: (_, { payload }) => payload,
})

export default combineReducers({
  balance,
})
