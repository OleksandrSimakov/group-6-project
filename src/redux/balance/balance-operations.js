import axios from 'axios'
import userBalanceActions from './balance-actions'

axios.defaults.baseURL = 'https://kapusta-pro.herokuapp.com/api'

const getBalance = () => async (dispatch) => {
  dispatch(userBalanceActions.getBalanceRequest())

  try {
    const response = await axios.get('/auth/setBalance')

    dispatch(userBalanceActions.getBalanceSuccess(response.data.balance))
  } catch (error) {
    dispatch(userBalanceActions.getBalanceError(error.message))
  }
}

const addBalance = (balance) => async (dispatch) => {
  dispatch(userBalanceActions.addBalanceRequest())

  try {
    const response = await axios.patch('/auth/setBalance', { balance })

    dispatch(userBalanceActions.addBalanceSuccess(response.data.balance))
  } catch (error) {
    dispatch(userBalanceActions.addBalanceError(error.message))
  }
}

const balanceOperations = {
  getBalance,
  addBalance,
}

export default balanceOperations
// export default { setCurrentBalance }
