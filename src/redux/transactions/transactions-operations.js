import * as actions from './transactions-actions'
import { fetch } from '../../services/fetchApi'

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

const getMonthlyBalancesYear = (year) => async (dispatch, getState) => {
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
}

export default transactionsOperations
