import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import TransButtons from '../TransButtons/TransButtons'
import TransEntry from '../TransEntry/TransEntry'
import TransCategory from '../TransCategory/TransCategory'
import TransDescription from '../TransDesciption/TransDescription'
import DateSelector from '../DateSelector/DateSelector'

import { Form, FormContainer } from './TransForm.styled'
import transactionsActions from '../../../redux/transactions/transactions-actions'
import transactionsOperations from '../../../redux/transactions/transactions-operations'

const TransactionsForm = ({
  endpoint,
  data,
  categoryTitle,
  income,
  expense,
}) => {
  const dispatch = useDispatch()
  const [trans, setTrans] = useState([])

  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [sum, setSum] = useState(0)

  const changeCategory = (value) => {
    setCategory(value)
  }
  const handleTransDescription = (value) => {
    setDescription(value)
  }

  const handleSum = (value) => {
    setSum(value)
  }

  const inputReset = () => dispatch(transactionsActions.resetInputValues(1))

  const handleSubmit = async (e) => {
    e.preventDefault()

    const transaction = {
      date: e.target[0].defaultValue,
      description: description,
      category: category,
      amount: +sum,
    }

    setTrans([...trans, transaction])

    await dispatch(transactionsOperations.addTransaction(endpoint, transaction))
    inputReset()
  }

  return (
    <Form type="submit" onSubmit={handleSubmit}>
      <FormContainer>
        <DateSelector />
        <TransDescription handleTransDescription={handleTransDescription} />
        <TransCategory
          category={data}
          categoryType={categoryTitle}
          changeCategory={changeCategory}
        />
      </FormContainer>

      <TransEntry handleSum={handleSum} />
      <TransButtons inputReset={inputReset} />
    </Form>
  )
}

// TransactionsForm.propTypes = {
//   endpoint: PropTypes.string.isRequired,
// }

export default TransactionsForm
