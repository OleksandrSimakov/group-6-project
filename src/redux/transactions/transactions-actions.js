import { createAction } from '@reduxjs/toolkit'

const getMonthlyBalanceRequest = createAction('getMonthlyBalanceRequest')
const getMonthlyBalanceSuccess = createAction('getMonthlyBalanceSuccess')
const getMonthlyBalanceError = createAction('getMonthlyBalanceError')

const setTotalBalanceRequest = createAction('setTotalBalanceRequest')
const setTotalBalanceSuccess = createAction('setTotalBalanceSuccess')
const setTotalBalanceError = createAction('setTotalBalanceError')

export {
  getMonthlyBalanceRequest,
  getMonthlyBalanceSuccess,
  getMonthlyBalanceError,
  setTotalBalanceRequest,
  setTotalBalanceSuccess,
  setTotalBalanceError,
}
