import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { DescriptionEntry } from './TransDescription.styled'
import transactionSelectors from '../../../redux/transactions/transactions-selectors'

const TransDescription = ({ handleTransDescription }) => {
  const [value, setValue] = useState('')
  const clearInput = useSelector(transactionSelectors.getClearedInputValues)
  const handleChange = (e) => [setValue(e.target.value)]

  useEffect(() => {
    handleTransDescription(value)
  }, [value])

  useEffect(() => {
    setValue('')
  }, [clearInput])

  return (
    <div>
      <DescriptionEntry
        type="text"
        placeholder="Описание товара"
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default TransDescription
