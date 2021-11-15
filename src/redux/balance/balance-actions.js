import { createAction } from '@reduxjs/toolkit'

const updateBalance = createAction('balance/updateBalance')
const updateCurrentIncomes = createAction('balance/updateCurrentIncomes')
const updateCurrentExpenses = createAction('balance/updateCurrentExpenses')
const getBalance = createAction('balance/getBalance')
// const setLoading = createAction('balance/setLoading')

const balanceActions = {
  updateBalance,
  getBalance,
  // setLoading,
  updateCurrentIncomes,
  updateCurrentExpenses,
}

export default balanceActions
