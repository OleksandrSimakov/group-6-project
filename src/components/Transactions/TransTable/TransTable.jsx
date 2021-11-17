import React from 'react'
// import { useState } from 'react'
// import items from './data-mock.json'
import DataTableItem from './TransTableItem'
import {
  TableContainer,
  TransactionTable,
  Header,
  ColumnHeader,
  ScrollBar,
} from './TransTable.styled'
import Summary from '../../Summary'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import styles from './TransTable.module.css'

const TransTable = ({ profit, transactions, onDelete }) => {
  const viewPort = useWindowDimensions()
  return (
    <>
      <div className={viewPort.width > 1279 ? `${styles.desktop}` : ``}>
        <TableContainer>
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
                  />
                ))}
            </tbody>
          </TransactionTable>
          <ScrollBar />
        </TableContainer>
        <Summary profits={profit} />
      </div>
    </>
  )
}

export default TransTable
