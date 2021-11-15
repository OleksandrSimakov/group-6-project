import React from 'react'
import { useState } from 'react'
// import items from '../TransTable/data-mock.json'
import { TransactionsList } from './MobTransTable.styled'
import MobTransTableItem from './MobTransTableItem'

const MobTransTable = ({ profit, transactions, onDelete }) => {
  return (
    <TransactionsList>
      {transactions.length > 0 &&
        transactions.map((item) => (
          <MobTransTableItem
            key={item._id}
            item={item}
            profit={profit}
            onDelete={onDelete}
          />
        ))}
    </TransactionsList>
  )
}

export default MobTransTable
