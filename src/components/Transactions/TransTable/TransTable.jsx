import React from 'react'
import { useState } from 'react'
import items from './data-mock.json'

import {
  TableContainer,
  TransactionTable,
  Header,
  ColumnHeader,
  TableItem,
  TableRow,
  DeleteIconWrapper,
  AmountValue,
} from './TransTable.styled'
import { ReactComponent as DeleteIcon } from '../../../images/delete.svg'

const TransTable = () => {
  //   const addOperations = (id, amount, category, description) => {
  //     const operation = {
  //       id,
  //       amount,
  //       category,
  //       description,
  //     }
  //   }

  //   const deleteOperations = (operationId) => {
  //     setOperations(
  //       operations.filter((operation) => operation.id !== operationId)
  //     )
  //   }

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
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableItem>
                {new Date(item.date).toLocaleString().slice(0, 10)}
              </TableItem>
              <TableItem>{item.description}</TableItem>
              <TableItem>{item.category}</TableItem>
              <TableItem>
                <AmountValue>{item.amount}</AmountValue>
              </TableItem>
              <TableItem>
                {item.action}
                <DeleteIconWrapper>
                  <DeleteIcon />
                </DeleteIconWrapper>
              </TableItem>
            </TableRow>
          ))}
        </tbody>
      </TransactionTable>
    </TableContainer>
  )
}

export default TransTable
