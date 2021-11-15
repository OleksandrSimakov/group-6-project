import { createAction } from '@reduxjs/toolkit'

const addBalanceRequest = createAction('balance/addBalanceRequest')
const addBalanceSuccess = createAction('balance/addBalanceSuccess')
const addBalanceError = createAction('balance/addBalanceError')

const getBalanceRequest = createAction('balance/getBalanceRequest')
const getBalanceSuccess = createAction('balance/getBalanceSuccess')
const getBalanceError = createAction('balance/getBalanceError')
// const updateBalance = createAction('balance/updateBalance')
// const getBalance = createAction('balance/getBalance')

// const updateCurrentIncomes = createAction('balance/updateCurrentIncomes')
// const updateCurrentExpenses = createAction('balance/updateCurrentExpenses')
// const setLoading = createAction('balance/setLoading')

const balanceActions = {
  addBalanceRequest,
  addBalanceSuccess,
  addBalanceError,
  getBalanceRequest,
  getBalanceSuccess,
  getBalanceError,
  // updateBalance,
  // getBalance,
  // // setLoading,
  // updateCurrentIncomes,
  // updateCurrentExpenses,
}

export default balanceActions
