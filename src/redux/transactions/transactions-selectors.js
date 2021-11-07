const getSummary = (state) => state.summary
const getExpenseBySixMonth = (state) => getSummary(state).sixMonthsExpense

const getIncomeBySixMonth = (state) => getSummary(state).sixMonthsIncome
const getSummaryIsLoading = (state) => state.summary.summaryIsLoading

const summarySelectors = {
  getSummary,
  getExpenseBySixMonth,
  getIncomeBySixMonth,
  getSummaryIsLoading,
}

export default summarySelectors
