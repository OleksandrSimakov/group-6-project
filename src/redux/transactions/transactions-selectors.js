export const getClearedInputValues = (state) =>
  state.transactions.resetValuesOfInput
export const datepickerValue = (state) => state.transactions.setDateValue

const getTransactions = (state) => state.transactions
const getExpenseOfDay = (state) => state.transactions.expenseOfDay
const getIncomeOfDay = (state) => state.transactions.incomeOfDay

const transactionSelectors = {
  getTransactions,
  getExpenseOfDay,
  getIncomeOfDay,
  datepickerValue,
  getClearedInputValues,
}

export default transactionSelectors
