export const getClearedInputValues = (state) =>
  state.transactions.resetValuesOfInput
export const datepickerValue = (state) => state.transactions.setDateValue

const transactionSelectors = { datepickerValue, getClearedInputValues }

export default transactionSelectors
