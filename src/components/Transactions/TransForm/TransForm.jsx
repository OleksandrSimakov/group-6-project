import { useState, useEffect } from 'react'
import TransButtons from '../TransButtons/TransButtons'
import TransEntry from '../TransEntry/TransEntry'
import TransCategory from '../TransCategory/TransCategory'
import TransDescription from '../TransDesciption/TransDescription'
import DateSelector from '../DateSelector/DateSelector'

import { Form, FormContainer } from './TransForm.styled'

const TransactionsForm = ({ data, catName, income, expense }) => {
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const changeCategory = (value) => {
    setCategory(value)
  }
  const handleTransDescription = (value) => {
    setDescription(value)
  }
  return (
    <Form type="submit" /* onSubmit={handleSubmit} */>
      <FormContainer>
        <DateSelector />
        <TransDescription handleTransDescription={handleTransDescription} />
        <TransCategory
          category={data}
          categoryType={catName}
          changeCategory={changeCategory}
        />
      </FormContainer>

      <TransEntry />
      <TransButtons /* inputReset={inputReset} */ />
    </Form>
  )
}

export default TransactionsForm
