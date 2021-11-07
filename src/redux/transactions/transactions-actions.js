import { createAction } from '@reduxjs/toolkit'

const getIncomeSummaryRequest = createAction('income/summary/request')
const getIncomeSummarySuccess = createAction('income/summary/success')
const getIncomeSummaryError = createAction('income/summary/error')

const getExpenseSummaryRequest = createAction('expense/summary/request')
const getExpenseSummarySuccess = createAction('expense/summary/success')
const getExpenseSummaryError = createAction('expense/summary/error')

const summaryActions = {
  getIncomeSummaryRequest,
  getIncomeSummarySuccess,
  getIncomeSummaryError,
  getExpenseSummaryRequest,
  getExpenseSummarySuccess,
  getExpenseSummaryError,
}

export default summaryActions
