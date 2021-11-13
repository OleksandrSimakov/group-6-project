import { createReducer, combineReducers } from '@reduxjs/toolkit'
import summaryActions from './summary-actions'
import { nanoid } from 'nanoid'

const formatter = Intl.DateTimeFormat('ru', { month: 'long' })

export const getFormattedMonth = (payload) => {
  return payload.map(({ total, _id: { month, year } }) => {
    const date = new Date(year, month - 1)

    const obj = {
      id: nanoid(),
      month: formatter.format(date).toUpperCase(),
      total,
    }

    return obj
  })
}

const sixMonthsIncome = createReducer([], {
  [summaryActions.getIncomeSummarySuccess]: (_, { payload }) =>
    getFormattedMonth(payload.incomeByMonth),
})

const sixMonthsExpense = createReducer([], {
  [summaryActions.getExpenseSummarySuccess]: (_, { payload }) =>
    getFormattedMonth(payload.expenseByMonth),
})

const summaryIsLoading = createReducer([], {
  [summaryActions.getIncomeSummaryRequest]: () => true,
  [summaryActions.getIncomeSummarySuccess]: () => false,
  [summaryActions.getIncomeSummaryError]: () => false,
  [summaryActions.getExpenseSummaryRequest]: () => true,
  [summaryActions.getExpenseSummarySuccess]: () => false,
  [summaryActions.getExpenseSummaryError]: () => false,
})

export default combineReducers({
  sixMonthsIncome,
  sixMonthsExpense,
  summaryIsLoading,
})
