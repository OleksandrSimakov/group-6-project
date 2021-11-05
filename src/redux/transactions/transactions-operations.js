import * as actions from './transactions-actions'
import { fetch } from '../../services/fetchApi'

const setBalance = (balance) => async (dispatch) => {
  dispatch(actions.setTotalBalanceRequest())

  try {
    const response = await fetch.setBalance(balance)
    dispatch(actions.setTotalBalanceSuccess(response.data.data.balance))
  } catch ({ response }) {
    dispatch(actions.setTotalBalanceError(response.data.message))
  }
}

const calculateBalancesPerMonth = (transactions) => {
  const result = []
  transactions.map((transaction) => {
    const balanceByMonth = result.find(
      (item) => item.month === transaction.month,
    )
    if (!balanceByMonth) {
      return result.push({
        month: transaction.month,
        value:
          transaction.type === 'income' ? +transaction.sum : -transaction.sum,
      })
    } else {
      return transaction.type === 'income'
        ? (balanceByMonth.value += transaction.sum)
        : (balanceByMonth.value -= transaction.sum)
    }
  })

  return result
}

const getMonthlyBalancesYear = (year) => async (dispatch) => {
  dispatch(actions.getMonthlyBalanceRequest())
  try {
    const response = await fetch.getTransactionsByPeriod(year)
    const balances = calculateBalancesPerMonth(response.data.result)
    dispatch(actions.getMonthlyBalanceSuccess(balances))
  } catch ({ response }) {
    dispatch(actions.getMonthlyBalanceError(response.data.message))
  }
}

const transactionsOperations = {
  getMonthlyBalancesYear,
  setBalance,
}

export default transactionsOperations
