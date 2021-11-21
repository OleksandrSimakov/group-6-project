import React, { useState } from "react";
// import { useState } from 'react'
// import items from './data-mock.json'
import DataTableItem from "./TransTableItem";
import {
  TableContainer,
  TransactionTable,
  Header,
  ColumnHeader,
  ScrollBar,
} from "./TransTable.styled";
import Summary from "../../Summary";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import styles from "./TransTable.module.css";
import { AcceptModalComponent } from "../../Modal/AcceptModal/AcceptModalComponent";

const TransTable = ({ profit, transactions, onDelete }) => {
  const viewPort = useWindowDimensions();
  const [show, setShow] = useState(false);
  const [idItem, setIdItem] = useState(null);
  return (
    <>
      <div className={viewPort.width > 1279 ? `${styles.desktop}` : ``}>
        <TableContainer>
          <AcceptModalComponent
            show={show}
            setShow={setShow}
            cb={() => {
              onDelete(idItem);
              setShow(!show);
            }}
          >
            Вы хотите удалить транзакцию?
          </AcceptModalComponent>
          <TransactionTable>
            <Header>
              <tr>
                <ColumnHeader>Дата</ColumnHeader>
                <ColumnHeader>Описание</ColumnHeader>
                <ColumnHeader>Категория</ColumnHeader>
                <ColumnHeader>Сумма</ColumnHeader>
                <ColumnHeader></ColumnHeader>
              </tr>
            </Header>

            <tbody className="transaction-tbody-desctop">
              {/* рендер данных транзакций с бекенда */}
              {transactions.length > 0 &&
                transactions.map((item) => (
                  <DataTableItem
                    key={item._id}
                    item={item}
                    profit={profit}
                    onDelete={onDelete}
                    show={show}
                    setShow={setShow}
                    setIdItem={setIdItem}
                  />
                ))}
            </tbody>
          </TransactionTable>
          <ScrollBar />
        </TableContainer>
        <Summary profits={profit} />
      </div>
    </>
  );
};

export default TransTable;
