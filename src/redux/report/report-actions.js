import { createAction } from '@reduxjs/toolkit';

const getIncomeDetailRequest = createAction('report/getIncomeDetailRequest');
const getIncomeDetailSuccess = createAction('report/getIncomeDetailSuccess');
const getIncomeDetailError = createAction('report/getIncomeDetailError');

const getExpenseDetailRequest = createAction('report/getExpenseDetailRequest');
const getExpenseDetailSuccess = createAction('report/getExpenseDetailSuccess');
const getExpenseDetailError = createAction('report/getExpenseDetailError');


const reportActions = {
  getIncomeDetailRequest,
  getIncomeDetailSuccess,
  getIncomeDetailError,
  getExpenseDetailRequest,
  getExpenseDetailSuccess,
  getExpenseDetailError,
};

export default reportActions;
