import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import ActionButton from '../../components/Transactions/ActionButton/ActionButton'
import 'react-datepicker/dist/react-datepicker.css'
import { format } from 'date-fns'
import { useDispatch } from 'react-redux'
import transactionsActions from '../../redux/transactions/transactions-actions'
import transactionsOperations from '../../redux/transactions/transactions-operations'
import { ReactComponent as Calculator } from '../../images/calculator.svg'
import {
  FormContainer,
  Form,
  DescriptionEntry,
  Input,
  Currency,
  CalculatorIcon,
  InputWrapper,
  ActionBtnWrapper,
  SelectContainer,
} from '../../components/Transactions/TransForm/TransForm.styled'

export default function TransactionForm({ options, profit, onSubmit }) {
  const date = new Date()
  const dispatch = useDispatch()
  const [productName, setProductName] = useState('')
  const [payValue, setPayValue] = useState('')
  const [category, setCategory] = useState([])

  useEffect(() => {
    const formatDate = format(new Date(), 'yyyy-MM-dd')
    dispatch(transactionsActions.setDate(formatDate))
    if (!profit) {
      dispatch(transactionsOperations.getExpenseByDate(formatDate))
    }
    if (profit) {
      dispatch(transactionsOperations.getIncomeByDate(formatDate))
    }

  }, [dispatch, profit])

  useEffect(() => {
    resetData()
  }, [profit])

  const resetData = () => {
    setProductName('')
    setPayValue('')
    setCategory([])
  }

  const resetInput = () => {
    setProductName('')
    setPayValue('')
    setCategory([])
  }

  const data = {
    date: format(new Date(date), 'yyyy-MM-dd'),
    category: category.label,
    description: productName,
    amount: payValue.includes(',') ? +payValue.replace(/,/g, '.') : +payValue,
  }

  const customStyles = {
    option: (provided, { isSelected }) => ({
      ...provided,

      color: isSelected ? '#52555f' : '#c7ccdc',
      backgroundColor: isSelected ? '#f5f6fb' : 'none',
      ':hover': {
        color: '#52555f',
        backgroundColor: '#f5f6fb',
      },
      cursor: 'pointer',
    }),
    control: () => ({
      display: 'flex',
      width: 179,
      height: 45,
      paddingTop: 1,
      paddingBottom: 2,

      border: '2px solid #f5f6fb',
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: 'none',
    }),
    menuList: (provided, state) => ({
      ...provided,
      overflow: 'inherit',
    }),
    container: (provided, state) => ({
      ...provided,

      border: '2px solid #ffffff',
      cursor: 'pointer',
    }),
    menu: (provided, state) => ({
      ...provided,
      top: 34,
      height: profit ? 80 : 380,
      borderRadius: 'none',
      boxShadow: '0px 3px 4px rgba(170, 178, 197, 0.4)',
      border: '2px solid #f5f6fb',
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      paddingLeft: 16,
      fontSize: 12,
      fontWeight: 400,
      color: '#c7ccdc',
    }),
  }

  return (
    <Form>
      <FormContainer>
        <DescriptionEntry
          className="input-productName"
          placeholder="Описание товара"
          name="name"
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
        <SelectContainer>
          <Select
            name="category"
            styles={customStyles}
            placeholder="Категория товара"
            options={options}
            value={category}
            onChange={setCategory}
            isSearchable={false}
          />
        </SelectContainer>
        <InputWrapper>
          <Input
            placeholder="0,00"
            name="value"
            type="number"
            value={payValue}
            onChange={(e) => setPayValue(e.target.value)}
            autoComplete="off"
          />
          <Currency>UAH</Currency>
          <CalculatorIcon>
            <Calculator />
          </CalculatorIcon>
        </InputWrapper>
      </FormContainer>

      <ActionBtnWrapper>
        <ActionButton
          type="submit"
          text="Ввод"
          onClick={() => {
            onSubmit(data)
            resetData()
          }}
        />
        <ActionButton type="button" text="Очистить" onClick={resetInput} />
      </ActionBtnWrapper>
    </Form>
  )
}

