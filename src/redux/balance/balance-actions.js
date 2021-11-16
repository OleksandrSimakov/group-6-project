import { createAction } from '@reduxjs/toolkit'

const addBalanceRequest = createAction('balance/addBalanceRequest')
const addBalanceSuccess = createAction('balance/addBalanceSuccess')
const addBalanceError = createAction('balance/addBalanceError')

const getBalanceRequest = createAction('balance/getBalanceRequest')
const getBalanceSuccess = createAction('balance/getBalanceSuccess')
const getBalanceError = createAction('balance/getBalanceError')

const updateCurrentIncomesRequest = createAction('balance/updateCurrentIncomes')
const updateCurrentIncomesSuccess = createAction('balance/updateCurrentIncomes')
const updateCurrentIncomesError = createAction('balance/updateCurrentIncomes')

const updateCurrentExpensesRequest = createAction(
  'balance/updateCurrentExpenses'
)
const updateCurrentExpensesSuccess = createAction(
  'balance/updateCurrentExpenses'
)
const updateCurrentExpensesRequestError = createAction(
  'balance/updateCurrentExpenses'
)

const setLoading = createAction('balance/setLoading')

const balanceActions = {
  addBalanceRequest,
  addBalanceSuccess,
  addBalanceError,
  getBalanceRequest,
  getBalanceSuccess,
  getBalanceError,
  updateCurrentIncomesRequest,
  updateCurrentIncomesSuccess,
  updateCurrentIncomesError,
  updateCurrentExpensesRequest,
  updateCurrentExpensesSuccess,
  updateCurrentExpensesRequestError,
  setLoading,
}

export default balanceActions
