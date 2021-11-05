import { createReducer, combineReducers } from '@reduxjs/toolkit'
import * as actions from './transactions-actions'

const monthlyBalancesYear = createReducer([], {
  [actions.getMonthlyBalanceSuccess]: (_, { payload }) => payload,
})

const balance = combineReducers({
  monthlyBalancesYear,
})

export { balance }
