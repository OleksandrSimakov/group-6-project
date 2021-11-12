import { createAction } from '@reduxjs/toolkit'

const transactionActions = {
  // addTransactionRequest: createAction('transactions/addTransactionRequest'),
  // addTransactionSuccess: createAction('transactions/addTransactionSuccess'),
  // addTransactionError: createAction('transactions/addTransactionError'),

  addIncomeRequest: createAction('transactions/addIncomeRequest'),
  addIncomeSuccess: createAction('transactions/addIncomeSuccess'),
  addIncomeError: createAction('transactions/addIncomeError'),

  addExpenseRequest: createAction('transactions/addExpenseRequest'),
  addExpenseSuccess: createAction('transactions/addExpenseSuccess'),
  addExpenseError: createAction('transactions/addExpenseError'),

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
