import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import reportActions from './report-actions';

export const setActive = array => {
  if (array.length === 0) return [];
  const newArr = array.map(el => {
    return {
      ...el,
      isActive: false,
    };
  });
  return [{ ...newArr[0], isActive: true }, ...newArr.slice(1)];
};

const reportIncome = createReducer([], {
  [reportActions.getIncomeDetailSuccess]: (state, { payload }) =>
  setActive(payload),
[reportActions.setActiveIncome]: (_, { payload }) => payload,
});

const reportExpense = createReducer([], {
  [reportActions.getExpenseDetailSuccess]: (state, { payload }) =>
  setActive(payload),

[reportActions.setActiveExpense]: (_, { payload }) => payload,
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
