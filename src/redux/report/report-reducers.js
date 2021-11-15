import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import reportActions from './report-actions';

const reportIncome = createReducer([], {
  [reportActions.getIncomeDetailSuccess]: (_, { payload }) => payload,
});

const reportExpense = createReducer([], {
  [reportActions.getExpenseDetailSuccess]: (_, { payload }) => payload,
});


const isLoading = createReducer(false, {
  [reportActions.getIncomeDetailRequest]: () => true,
  [reportActions.getIncomeDetailSuccess]: () => false,
  [reportActions.getIncomeDetailError]: () => false,
  [reportActions.getExpenseDetailRequest]: () => true,
  [reportActions.getExpenseDetailSuccess]: () => false,
  [reportActions.getExpenseDetailError]: () => false,
});


export default combineReducers({
  reportIncome,
  reportExpense,
  isLoading,
});
