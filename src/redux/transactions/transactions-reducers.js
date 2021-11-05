import { createReducer, combineReducers } from '@reduxjs/toolkit'
import * as actions from './transactions-actions'

const monthlyBalancesYear = createReducer([], {
  [actions.getMonthlyBalanceSuccess]: (_, { payload }) => payload,
})

const totalBalance = createReducer(0, {
  [actions.setTotalBalanceSuccess]: (_, { payload }) => payload,
})

const balance = combineReducers({
  monthlyBalancesYear,
  totalBalance,
})

export { balance }
