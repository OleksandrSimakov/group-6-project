import React from 'react'
import {
  TableItem,
  TableRow,
  DeleteIconBtn,
  AmountValueHigh,
  AmountValueLow,
} from './TransTable.styled'
import { ReactComponent as DeleteIcon } from '../../../images/delete.svg'
import { format } from 'date-fns'

// import items from './data-mock.json'

const DataTableItem = ({ item, profit, onDelete }) => {
  return (
    <TableRow key={item._id}>
      <TableItem>{format(new Date(item.date), 'dd.MM.yyyy')}</TableItem>
      <TableItem>{item.description}</TableItem>
      <TableItem>{item.category}</TableItem>
      <TableItem>
        {profit ? (
          <AmountValueHigh>{`${item.amount.toFixed(2)} грн.`}</AmountValueHigh>
        ) : (
          <AmountValueLow>{`${-item.amount.toFixed(2)} грн.`}</AmountValueLow>
        )}
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
