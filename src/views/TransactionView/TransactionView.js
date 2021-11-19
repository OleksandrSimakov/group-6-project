import React, { useState, useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
// import toast from 'react-hot-toast'
import Select from 'react-select'
import ActionButton from '../../components/Transactions/ActionButton/ActionButton'
import ArrowGoBack from '../../components/ArrowGoBack/ArrowGoBack'
import 'react-datepicker/dist/react-datepicker.css'
import { format } from 'date-fns'
import { useDispatch } from 'react-redux'
import transactionsActions from '../../redux/transactions/transactions-actions'
import transactionOperations from '../../redux/transactions/transactions-operations'
import balanceOperations from '../../redux/balance/balance-operations'
import summaryOperations from '../../redux/transactions/summary-operations'
import { ReactComponent as Calculator } from '../../images/calculator.svg'
import s from './TransactionView.module.css'
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

const optionsExpense = [
  { value: 'transport', label: 'Транспорт' },
  { value: 'products', label: 'Продукты' },
  { value: 'health', label: 'Здоровье' },
  { value: 'alcohol', label: 'Алкоголь' },
  { value: 'entertainment', label: 'Развлечения' },
  { value: 'home', label: 'Всё для дома' },
  { value: 'technics', label: 'Техника' },
  { value: 'bill', label: 'Комуналка, связь' },
  { value: 'sport', label: 'Спорт, хобби' },
  { value: 'education', label: 'Образование' },
  { value: 'other', label: 'Прочее' },
]

const optionsProfit = [
  { value: 'salary', label: 'ЗП' },
  { value: 'additional', label: 'Доп. доход' },
]

export default function TransactionView() {
  const location = useLocation()
  const date = new Date()
  const dispatch = useDispatch()
  const [expense, setExpense] = useState(true)
  const [profit, setProfit] = useState(false)
  const [productName, setProductName] = useState('')
  const [payValue, setPayValue] = useState('')
  const [category, setCategory] = useState([])

  useEffect(() => {
    if (location.pathname === '/expense') {
      setExpense(true)
      setProfit(false)
    }
    if (location.pathname === '/profit') {
      setExpense(false)
      setProfit(true)
    }
  }, [location])

  useEffect(() => {
    const formatDate = format(new Date(), 'yyyy-MM-dd')
    dispatch(transactionsActions.setDate(formatDate))
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

  const getTransactionIncome = useCallback(() => {
    dispatch(summaryOperations.getIncomeByMonth())
  }, [dispatch])

  const getTransactionExpense = useCallback(() => {
    dispatch(summaryOperations.getExpenseByMonth())
  }, [dispatch])

  const onTransactionAddSuccess = () => {
    // toast.success('Транзакция успешно добавлена!')
    dispatch(balanceOperations.getBalance())
    if (profit) {
      dispatch(transactionOperations.getIncomeByDate(date))
      getTransactionIncome()
    }
    if (expense) {
      dispatch(transactionOperations.getExpenseByDate(date))
      getTransactionExpense()
    }
  }

  // const onTransactionAddError = () => {
  //   toast.error('Не удалось добавить транзакцию, попробуйте позже!')
  // }
  const handleSubmit = (data) => {
    if (profit) {
      dispatch(
        transactionOperations.addIncome(
          data
          // onTransactionAddSuccess
          // onTransactionAddError
        )
      )
    }
    if (expense) {
      dispatch(
        transactionOperations.addExpense(
          data
          // onTransactionAddSuccess
          // onTransactionAddError
        )
      )
    }
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
    <>
       <Form>
        <ArrowGoBack />
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
              options={profit ? optionsProfit : optionsExpense}
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
              handleSubmit(data)
              resetData()
            }}
          />
          <ActionButton type="button" text="Очистить" onClick={resetInput} />
        </ActionBtnWrapper>
      </Form>
    </>
  )
}
