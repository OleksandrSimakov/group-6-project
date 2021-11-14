import React from 'react'
import {
  TableItem,
  TableRow,
  DeleteIconBtn,
  AmountValue,
} from './TransTable.styled'
import { ReactComponent as DeleteIcon } from '../../../images/delete.svg'
import { format } from 'date-fns'

// import items from './data-mock.json'

const DataTableItem = ({ item, profit, onDelete }) => {
  const currCategory = profit ? item.amount : -item.amount
  // const currClass = profit ? 'tableAmountIncome' : 'tableAmount'
  return (
    <TableRow key={item._id}>
      <TableItem>{format(new Date(item.date), 'dd.MM.yyyy')}</TableItem>
      <TableItem>{item.description}</TableItem>
      <TableItem>{item.category}</TableItem>
      <TableItem>
        <AmountValue>{`${currCategory.toFixed(2)} грн.`}</AmountValue>
      </TableItem>
      <TableItem>
        {item.action}
        <DeleteIconBtn type="button" onClick={() => onDelete(item._id)}>
          <DeleteIcon />
        </DeleteIconBtn>
      </TableItem>
    </TableRow>
  )
}
export default DataTableItem
