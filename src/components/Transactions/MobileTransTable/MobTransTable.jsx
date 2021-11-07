import React from 'react'
import { useState } from 'react'
import items from './data-mock.json'
import { DeleteIconWrapper } from './MobTransTable.styled'
import { ReactComponent as DeleteIcon } from '../../../images/delete.svg'

const MobTransTable = () => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <div>
            <p>{item.description}</p>
            <div>
              <span>{new Date(item.date).toLocaleString().slice(0, 10)}</span>
              <span>{item.category}</span>
            </div>
          </div>
          <div>
            <span>{item.amount}</span>
            {item.action}
            <DeleteIconWrapper>
              <DeleteIcon />
            </DeleteIconWrapper>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default MobTransTable
