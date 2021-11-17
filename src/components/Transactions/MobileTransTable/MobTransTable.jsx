import React from 'react'
// import { useState } from 'react'
// import transactionOperations from '../../../redux/transactions/transactions-operations'
// import items from '../TransTable/data-mock.json'
import { TransactionsList } from './MobTransTable.styled'
import MobTransTableItem from './MobTransTableItem'

const MobTransTable = ({ profit, transactions, onDelete }) => {
  // console.log(...transactions)

  return (
    <TransactionsList>
      {transactions.length > 0 &&
        transactions.map((transaction) => (
          <MobTransTableItem
            key={transaction._id}
            item={transaction}
            profit={profit}
            onDelete={onDelete}
          />
        ))}
    </TransactionsList>
  )
}

export default MobTransTable
