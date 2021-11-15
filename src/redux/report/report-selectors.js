import { createSelector } from '@reduxjs/toolkit';
const getIncomeDetail = state => state.report.reportIncome;
const getExpenseDetail = state => state.report.reportExpense;
const getIsLoading = state => state.report.isLoading;

const getTotalIncome = createSelector([getIncomeDetail], (report) => {
      
  return report.reduce((total, elem) => { return total + elem.total }, 0 );
    },
);
  
const getTotalExpense = createSelector([getExpenseDetail], (report) => {
      
  return report.reduce((total, elem) => { return total + elem.total }, 0 );
    },
  );

const reportSelectors = {
  getIncomeDetail,
  getExpenseDetail,
  getTotalIncome,
  getTotalExpense,
  getIsLoading
};

export default reportSelectors;