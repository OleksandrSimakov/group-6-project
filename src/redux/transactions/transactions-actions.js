import { createAction } from '@reduxjs/toolkit'

const getIncomeSummaryRequest = createAction('income/summary/request')
const getIncomeSummarySuccess = createAction('income/summary/success')
const getIncomeSummaryError = createAction('income/summary/error')
const addUserIncome = createAction('transactions/addUserIncome')
const addUserIncomeSuccess = createAction('transactions/addUserIncomeSuccess')
const addUserIncomeError = createAction('transactions/addUserIncomeError')

const getExpenseSummarySuccess = createAction('expense/summary/success')
const getExpenseSummaryError = createAction('expense/summary/error')
const addUserExpense = createAction('transactions/addUserExpense')
const addUserExpenseSuccess = createAction('transactions/addUserExpenseSuccess')
const addUserExpenseError = createAction('transactions/addUserExpenseError')

const deleteUserTransaction = createAction('transactions/deleteUserTransaction')
const deleteUserTransactionSuccess = createAction(
  'transactions/deleteUserTransactionSuccess'
)
const deleteUserTransactionError = createAction(
  'transactions/deleteUserTransactionError'
)

const resetInputValues = createAction('transactions/resetInputValues')

export {
  addUserIncome,
  addUserIncomeSuccess,
  addUserIncomeError,
  addUserExpense,
  addUserExpenseSuccess,
  addUserExpenseError,
  deleteUserTransaction,
  deleteUserTransactionSuccess,
  deleteUserTransactionError,
  resetInputValues,
}
