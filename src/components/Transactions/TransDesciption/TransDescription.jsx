import { useState, useEffect } from 'react'
import { DescriptionEntry } from './TransDescription.styled'

const TransDescription = ({ handleTransDescription }) => {
  const [value, setValue] = useState('')

  const handleChange = (e) => [setValue(e.target.value)]

  useEffect(() => {
    handleTransDescription(value)
  }, [value])

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
