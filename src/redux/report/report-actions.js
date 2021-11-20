import { createAction } from '@reduxjs/toolkit';

const getIncomeDetailRequest = createAction('report/getIncomeDetailRequest');
const getIncomeDetailSuccess = createAction('report/getIncomeDetailSuccess');
const getIncomeDetailError = createAction('report/getIncomeDetailError');

const getExpenseDetailRequest = createAction('report/getExpenseDetailRequest');
const getExpenseDetailSuccess = createAction('report/getExpenseDetailSuccess');
const getExpenseDetailError = createAction('report/getExpenseDetailError');

const setActiveExpense = createAction('reports/setActiveExpense');
const setActiveIncome = createAction('reports/setActiveIncome');


const reportActions = {
  getIncomeDetailRequest,
  getIncomeDetailSuccess,
  getIncomeDetailError,
  getExpenseDetailRequest,
  getExpenseDetailSuccess,
  getExpenseDetailError,
  setActiveExpense,
  setActiveIncome,
};

export default reportActions;
