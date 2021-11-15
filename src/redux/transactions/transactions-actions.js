import { createAction } from '@reduxjs/toolkit'

const transactionActions = {
  addIncomeRequest: createAction('transactions/addIncomeRequest'),
  addIncomeSuccess: createAction('transactions/addIncomeSuccess'),
  addIncomeError: createAction('transactions/addIncomeError'),

  addExpenseRequest: createAction('transactions/addExpenseRequest'),
  addExpenseSuccess: createAction('transactions/addExpenseSuccess'),
  addExpenseError: createAction('transactions/addExpenseError'),

  getExpenseByDateRequest: createAction('transactions/getExpenseByDateRequest'),
  getExpenseByDateSuccess: createAction('transactions/getExpenseByDateSuccess'),
  getExpenseByDateError: createAction('transactions/getExpenseByDateError'),

  getIncomeByDateRequest: createAction('transactions/getIncomeByDateRequest'),
  getIncomeByDateSuccess: createAction('transactions/getIncomeByDateSuccess'),
  getIncomeByDateError: createAction('transactions/getIncomeByDateError'),

  getLastRequest: createAction('transactions/getLastRequest'),
  getLastSuccess: createAction('transactions/getLastSuccess'),
  getLastError: createAction('transactions/getLastError'),

  deleteTransactionRequest: createAction('transactions/deleteRequest'),
  deleteTransactionSuccess: createAction('transactions/deleteSuccess'),
  deleteTransactionError: createAction('transactions/deleteError'),
  setDate: createAction('set-date'),
}

export default transactionActions
