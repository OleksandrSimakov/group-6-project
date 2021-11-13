import axios from 'axios'
import userBalanceActions from './balance-actions'

axios.defaults.baseURL = 'https://kapusta-pro.herokuapp.com/'

// const getBalance = () => async (dispatch) => {
//   dispatch(userBalanceActions.getBalanceRequest())

//   try {
//     const response = await axios.get('api/auth/balance')
//     console.log(response)

//     dispatch(userBalanceActions.getBalanceSuccess(response.data))
//   } catch (error) {
//     dispatch(userBalanceActions.getBalanceError(error.message))
//   }
// }

const addBalance = (balance) => async (dispatch) => {
  dispatch(userBalanceActions.addBalanceRequest())

  try {
    const response = await axios.patch('api/auth/balance', { balance })

    dispatch(userBalanceActions.addBalanceSuccess(response.data.balance))
    console.log(response)
    console.log('Balance added')
  } catch (error) {
    dispatch(userBalanceActions.addBalanceError(error.message))
  }
}

const balanceOperations = {
  /*  getBalance, */
  addBalance,
}

export default balanceOperations
// export default { setCurrentBalance }
