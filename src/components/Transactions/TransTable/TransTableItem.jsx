import React from 'react'

import items from './data-mock.json'

const DataTableItem = ({ id, date, description, category, amount }) => (
  <>
    <td>{id}</td>
    <td>{date}</td>
    <td>{description}</td>
    <td>{category}</td>
    <td>{amount}</td>
  </>
)

export default DataTableItem
