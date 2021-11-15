// import balanceServices from '../../services/transactions-api'
import balanceActions from './balance-actions'
import axios from 'axios'

// const updateBalance = (newBalance) => async (dispatch) => {
//   try {
//     const updatedBalance = await balanceServices.updateUserBalance(newBalance)
//     dispatch(balanceActions.updateBalance(updatedBalance))
//   } catch (error) {
//     throw new Error(error)
//   }
// }
const getBalance = () => async (dispatch) => {
  dispatch(balanceActions.getBalanceRequest())

  try {
    const response = await axios.get('/api/auth/current')
    console.log(response)
    dispatch(balanceActions.getBalanceSuccess(response.data.user.data.balance))
  } catch (error) {
    dispatch(balanceActions.getBalanceError(error.message))
    console.log(error.message)
  }
}

const updateBalance = (balance) => async (dispatch) => {
  dispatch(balanceActions.addBalanceRequest())

  try {
    const response = await axios.patch('/api/auth/balance', {
      balance,
    })
    console.log(response.data)
    dispatch(balanceActions.addBalanceSuccess(response.data.balance))
  } catch (error) {
    dispatch(balanceActions.addBalanceError(error.message))
  }
}
// const getBalance = () => async (dispatch) => {
//   try {
//     const balance = await balanceServices.fetchBalance()
//     console.log(balance)
//     dispatch(balanceActions.getBalance(balance))
//   } catch (error) {
//     throw new Error(error)
//   }
// }

const balanceOperations = {
  updateBalance,
  getBalance,
}

export default balanceOperations
