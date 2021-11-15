import balanceServices from '../../services/transactions-api'
import balanceActions from './balance-actions'

const currentDate = new Date()
const currentYear = currentDate.getFullYear()
const currentMonth = currentDate.getMonth() + 1

const updateBalance = (newBalance) => async (dispatch) => {
  try {
    const updatedBalance = await balanceServices.updateUserBalance(newBalance)
    dispatch(balanceActions.updateBalance(updatedBalance))
  } catch (error) {
    throw new Error(error)
  }
}

const updateCurrentExpenses =
  (year = currentYear, month = currentMonth) =>
  async (dispatch) => {
    try {
      const updatedExpenses = await balanceServices.updatedExpenses(year, month)
      dispatch(balanceActions.updateCurrentExpenses(updatedExpenses))
    } catch (error) {
      throw new Error(error)
    }
  }

const updateCurrentIncomes =
  (year = currentYear, month = currentMonth) =>
  async (dispatch) => {
    try {
      const updatedIncomes = await balanceServices.updatedIncomes(year, month)
      dispatch(balanceActions.updateCurrentIncomes(updatedIncomes))
    } catch (error) {
      throw new Error(error)
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
  // getBalance,
  updateCurrentExpenses,
  updateCurrentIncomes,
}

export default balanceOperations
