import { createAction } from '@reduxjs/toolkit'

const getMonthlyBalanceRequest = createAction('getMonthlyBalanceRequest')
const getMonthlyBalanceSuccess = createAction('getMonthlyBalanceSuccess')
const getMonthlyBalanceError = createAction('getMonthlyBalanceError')

export {
  getMonthlyBalanceRequest,
  getMonthlyBalanceSuccess,
  getMonthlyBalanceError,
}
