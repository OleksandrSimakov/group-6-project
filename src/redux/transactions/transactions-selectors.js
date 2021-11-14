const currentDate = (state) => state.transactions.selectedDate
const getTransactions = (state) => state.transactions.transactions
const getIsLoading = (state) => state.transactions.isLoading
const getLast = (state) => state.transactions.getLast

const transactionsSelectors = {
  currentDate,
  getTransactions,
  getIsLoading,
  getLast,
}

export default transactionsSelectors
