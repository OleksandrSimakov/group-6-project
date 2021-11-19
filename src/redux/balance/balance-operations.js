// import balanceServices from '../../services/transactions-api'
import balanceActions from './balance-actions'
import axios from 'axios'

const getBalance = () => async (dispatch) => {
  dispatch(balanceActions.getBalanceRequest())

  try {
    const response = await axios.get('api/auth/current')
    // console.log(typeof response.data.user.data.balance)
    dispatch(balanceActions.getBalanceSuccess(response.data.user.data.balance))
  } catch (error) {
    dispatch(balanceActions.getBalanceError(error.message))
    // console.log(error.message)
  }
}

const updateBalance = (newBalance) => async (dispatch) => {
  dispatch(balanceActions.addBalanceRequest())

  try {
    const response = await axios.patch('api/auth/balance', {
      balance: newBalance,
    })
    // console.log(response.data.balance)
    dispatch(balanceActions.addBalanceSuccess(response.data.balance))
  } catch (error) {
    dispatch(balanceActions.addBalanceError(error.message))
  }
}

const balanceOperations = {
  updateBalance,
  getBalance,
}

export default balanceOperations
