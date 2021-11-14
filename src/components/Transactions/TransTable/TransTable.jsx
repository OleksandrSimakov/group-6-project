import React from 'react'
// import { useState } from 'react'
// import items from './data-mock.json'
import DataTableItem from './TransTableItem'
import {
  TableContainer,
  TransactionTable,
  Header,
  ColumnHeader,
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
          {transactions.map((item) => (
            <DataTableItem
              key={item._id}
              item={item}
              profit={profit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </TransactionTable>
    </TableContainer>
  )
}

export default TransTable
