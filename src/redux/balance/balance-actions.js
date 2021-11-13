import { createAction } from '@reduxjs/toolkit'

// const userBalanceActions = {
//     setCurrentBalanceRequest: createAction('user/setCurrentBalanceRequest'),
//     setCurrentBalanceSuccess: createAction('user/setCurrentBalanceSuccess'),
//     setCurrentBalanceError: createAction('user/setCurrentBalanceError')
// }
const getBalanceRequest = createAction('auth/getBalanceRequest')
const getBalanceSuccess = createAction('auth/getBalanceSuccess')
const getBalanceError = createAction('auth/getBalanceError')

const addBalanceRequest = createAction('auth/addBalanceRequest')
const addBalanceSuccess = createAction('auth/addBalanceSuccess')
const addBalanceError = createAction('auth/addBalanceError')

const balanceActions = {
  getBalanceRequest,
  getBalanceSuccess,
  getBalanceError,
  addBalanceRequest,
  addBalanceSuccess,
  addBalanceError,
}

export default balanceActions
