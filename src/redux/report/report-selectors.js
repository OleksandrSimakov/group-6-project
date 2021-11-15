const getIncomeDetail = state => state.report.reportIncome;
const getExpenseDetail = state => state.report.reportExpense;
const getIsLoading = state => state.report.isLoading;

const reportSelectors = {
  getIncomeDetail,
  getExpenseDetail,
  getIsLoading
};

export default reportSelectors;