import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import balanceOperations from "../../../redux/balance/balance-operations";
import transactionOperations from "../../../redux/transactions/transactions-operations";
import transactionsSelectors from "../../../redux/transactions/transactions-selectors";
import { TransactionsList } from "./MobTransTable.styled";
import MobTransTableItem from "./MobTransTableItem";
import toast from "react-hot-toast";
import { AcceptModalComponent } from "../../Modal/AcceptModal/AcceptModalComponent";
// import items from '../TransTable/data-mock.json'

const MobTransTable = () => {
  const [show, setShow] = useState(false);
  const [idItem, setIdItem] = useState(null);
  const transactions = useSelector(transactionsSelectors.getLast);
  // const isLoading = useSelector(transactionsSelectors.getIsLoading)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transactionOperations.getLast());
  }, [dispatch]);

  const onDeleteTransaction = (id) => {
    dispatch(
      transactionOperations.deleteTransaction(
        id,
        onDeleteTransactionSuccess,
        onDeleteTransactionError
      )
    );
  };

  const onDeleteTransactionSuccess = () => {
    toast.success("Транзакция успешно удалена!");
    dispatch(balanceOperations.getBalance());
    dispatch(transactionOperations.getLast());
  };

  const onDeleteTransactionError = (error) => {
    toast.error("Не удалось удалить транзакцию, попробуйте позже!");
  };
  // console.log(...transactions)
  ////прописать удаление транзакции на мобильной версии
  return (
    <>
      <AcceptModalComponent
        show={show}
        setShow={setShow}
        cb={() => {
          onDeleteTransaction(idItem);
          setShow(!show);
        }}
      >
        Вы хотите удалить транзакцию?
      </AcceptModalComponent>
      <TransactionsList>
        {transactions.length > 0 &&
          transactions.map((transaction) => (
            <MobTransTableItem
              key={transaction._id}
              transaction={transaction}
              onDelete={onDeleteTransaction}
              show={show}
              setShow={setShow}
              setIdItem={setIdItem}
            />
          ))}
      </TransactionsList>
    </>
  );
};

export default MobTransTable;
