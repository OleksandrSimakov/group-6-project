import axios from 'axios'
import summaryActions from './summary-actions'

const getExpenseByMonth = () => async (dispatch) => {
  dispatch(summaryActions.getExpenseSummaryRequest())

  try {
    const { data } = await axios.get('/api/transactions/getExpenseByMonth')
    dispatch(summaryActions.getExpenseSummarySuccess(data))
  } catch (error) {
    dispatch(summaryActions.getExpenseSummaryError(error.message))
  }
}

const getIncomeByMonth = () => async (dispatch) => {
  dispatch(summaryActions.getIncomeSummaryRequest())

  try {
    const { data } = await axios.get('/api/transactions/getIncomeByMonth')
    dispatch(summaryActions.getIncomeSummarySuccess(data))
  } catch (error) {
    dispatch(summaryActions.getIncomeSummaryError(error.message))
  }
}

const summaryOperations = {
  getExpenseByMonth,
  getIncomeByMonth,
}

export default summaryOperations
