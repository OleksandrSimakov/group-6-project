import React from 'react'
import { useState } from 'react'
import items from '../TransTable/data-mock.json'
import {
  TransactionsList,
  TransactionItem,
  DescriptionWrap,
  CategoryDateWrap,
  Description,
  DateItem,
  Category,
  AmountWrap,
  Amount,
  DeleteIconWrapper,
} from './MobTransTable.styled'
import { ReactComponent as DeleteIcon } from '../../../images/delete.svg'

const MobTransTable = () => {
  return (
    <TransactionsList>
      {items.map((item) => (
        <TransactionItem key={item.id}>
          <DescriptionWrap>
            <Description>{item.description}</Description>
            <CategoryDateWrap>
              <DateItem>
                {new Date(item.date).toLocaleString().slice(0, 10)}
              </DateItem>
              <Category>{item.category}</Category>
            </CategoryDateWrap>
          </DescriptionWrap>
          <AmountWrap>
            <Amount>{item.amount}</Amount>
            {item.action}
            <DeleteIconWrapper>
              <DeleteIcon />
            </DeleteIconWrapper>
          </AmountWrap>
        </TransactionItem>
      ))}
    </TransactionsList>
  )
}

export default MobTransTable
