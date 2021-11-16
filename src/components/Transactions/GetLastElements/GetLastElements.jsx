import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  transactionsSelectors,
  transactionsOperations,
} from '../../redux/transactions';
import GetLastElementLi from './GetLastElementLi';
import { toast } from 'react-toastify';
import balanceOperations from '../../redux/balance/balance-operations';
import Loader from 'react-js-loader';

export default function GetLastElements() {
  const transactions = useSelector(transactionsSelectors.getLast);
  const isLoading = useSelector(transactionsSelectors.getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transactionsOperations.getLast());
  }, [dispatch]);

  const onDeleteTransaction = id => {
    dispatch(
      transactionsOperations.deleteTransaction(
        id,
        onDeleteTransactionSuccess,
        onDeleteTransactionError,
      ),
    );
  };

  const onDeleteTransactionSuccess = () => {
    toast.success('Transaction has been deleted.');
    dispatch(balanceOperations.getBalance());
    dispatch(transactionsOperations.getLast());
    // dispatch(balanceOperations.getBalance());
    // if (profits) {
    //   dispatch(transactionsOperations.getIncomeByDate(selectedDate));
    // }
    // if (costs) {
    //   dispatch(transactionsOperations.getExpenseByDate(selectedDate));
    // }
  };

  const onDeleteTransactionError = error => {
    toast.error('Something went wrong, please try again later.');
  };

  return (
    <ul className="getlast-ul">
      {isLoading ? (
        <li>
          <Loader
            type="spinner-circle"
            bgColor={'#ff751d'}
            color={'#ff751d'}
            size={80}
          />
        </li>
      ) : (
        transactions.length > 0 &&
        transactions.map(transaction => (
          <GetLastElementLi
            transaction={transaction}
            key={transaction._id}
            onDelete={onDeleteTransaction}
          />
        ))
      )}
    </ul>
  );
}
