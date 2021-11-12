import { createAction } from '@reduxjs/toolkit'

const transactionActions = {
  addExpenseRequest: createAction('transactions/addExpenseRequest'),
  addExpenseSuccess: createAction('transactions/addExpenseSuccess'),
  addExpenseError: createAction('transactions/addExpenseError'),

  addIncomeRequest: createAction('transactions/addIncomeRequest'),
  addIncomeSuccess: createAction('transactions/addIncomeSuccess'),
  addIncomeError: createAction('transactions/addIncomeError'),

  deleteUserTransactionRequest: createAction(
    'transactions/deleteUserTransactionRequest'
  ),
  deleteUserTransactionSuccess: createAction(
    'transactions/deleteUserTransactionSuccess'
  ),
  deleteUserTransactionError: createAction(
    'transactions/deleteUserTransactionError'
  ),

  setCurrentDateValue: createAction('transactions/setCurrentDateValue'),
  resetInputValues: createAction('transactions/resetInputValues'),
}

export default transactionActions
