export const getClearedInputValues = (state) =>
  state.transactions.resetValuesOfInput
export const datepickerValue = (state) => state.transactions.setDateValue

const getTransactions = (state) => state.transactions
const getIncomes = (state) => state.transactions.incomes
const getExpenses = (state) => state.transactions.expenses

const transactionSelectors = {
  getTransactions,
  getIncomes,
  getExpenses,
  datepickerValue,
  getClearedInputValues,
}

export default transactionSelectors
