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

const TransTable = ({ profit, transactions, onDelete }) => {
  return (
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
          {/* отрендерить данные транзакций с бекенда */}
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
  )
}

export default TransTable
