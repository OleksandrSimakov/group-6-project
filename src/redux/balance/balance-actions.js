import { createAction } from '@reduxjs/toolkit'

// const userBalanceActions = {
//     setCurrentBalanceRequest: createAction('user/setCurrentBalanceRequest'),
//     setCurrentBalanceSuccess: createAction('user/setCurrentBalanceSuccess'),
//     setCurrentBalanceError: createAction('user/setCurrentBalanceError')
// }
const getBalanceRequest = createAction('balance/getBalanceRequest')
const getBalanceSuccess = createAction('balance/getBalanceSuccess')
const getBalanceError = createAction('balance/getBalanceError')

const addBalanceRequest = createAction('balance/addBalanceRequest')
const addBalanceSuccess = createAction('balance/addBalanceSuccess')
const addBalanceError = createAction('balance/addBalanceError')

const balanceActions = {
  getBalanceRequest,
  getBalanceSuccess,
  getBalanceError,
  addBalanceRequest,
  addBalanceSuccess,
  addBalanceError,
}

export default balanceActions
