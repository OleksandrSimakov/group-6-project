import axios from 'axios';
import reportActions from './report-actions';

const getIncomeDetail = date => async dispatch => {
  dispatch(reportActions.getIncomeDetailRequest());
  try {
    const { data } = await axios.get(
      `/api/transactions/getIncomeDetail/${date}`,
    );
    dispatch(reportActions.getIncomeDetailSuccess(data.incomeDetail));
  } catch (error) {
    dispatch(reportActions.getIncomeDetailError());
  }
};
const getExpenseDetail = date => async dispatch => {
  dispatch(reportActions.getExpenseDetailRequest());
  try {
    const { data } = await axios.get(
      `/api/transactions/getExpenseDetail/${date}`,
    );
    dispatch(reportActions.getExpenseDetailSuccess(data.expenseDetail));
  } catch (error) {
    dispatch(reportActions.getExpenseDetailError(error));
  }
};

const reportOperations = {
  getIncomeDetail,
  getExpenseDetail,
};

export default reportOperations;