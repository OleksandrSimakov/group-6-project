import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import ActionButton from '../ActionButton/ActionButton'
import WindowDimensions from '../../../hooks/useWindowDimensions'
import ReactDateSelector from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { format } from 'date-fns'
import ru from 'date-fns/locale/ru'
import { useDispatch } from 'react-redux'
import transactionsActions from '../../../redux/transactions/transactions-actions'
import transactionsOperations from '../../../redux/transactions/transactions-operations'
import { ReactComponent as CalendarIcon } from '../../../images/calendar.svg'
import { ReactComponent as Calculator } from '../../../images/calculator.svg'
import {
  FormContainer,
  Form,
  CalendarWrapper,
  CalendarIconWrapper,
  ExampleCustomInput,
  DescriptionEntry,
  Input,
  Currency,
  CalculatorIcon,
  InputWrapper,
  ActionBtnWrapper,
  SelectContainer,
} from './TransForm.styled'

export default function TransactionForm({ options, profit, onSubmit }) {
  const window = WindowDimensions()
  const dispatch = useDispatch()
  const initialDate = new Date()
  const [productName, setProductName] = useState('')
  const [payValue, setPayValue] = useState('')
  const [category, setCategory] = useState([])
  const [date, setDate] = useState(initialDate)

  useEffect(() => {
    if (!profit) {
      const formatDate = format(new Date(date), 'yyyy-MM-dd')
      dispatch(transactionsOperations.getExpenseByDate(formatDate))
    }
    if (profit) {
      const formatDate = format(new Date(date), 'yyyy-MM-dd')
      dispatch(transactionsOperations.getIncomeByDate(formatDate))
    }
  }, [dispatch, date, profit])

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

  const selectDate = (date) => {
    setDate(date)
    const formatDate = format(new Date(date), 'yyyy-MM-dd')
    dispatch(transactionsActions.setDate(formatDate))
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

  return (<div>
    { window.width > 767 ?
      <Form>
      <FormContainer>
        <CalendarWrapper>
          <CalendarIconWrapper>
            <CalendarIcon />
          </CalendarIconWrapper>
          <div>
            <ReactDateSelector
              locale={ru}
              selected={date}
              onChange={(date) => selectDate(date)}
              dateFormat="dd.MM.yyyy"
              fixedHeight
              customInput={<ExampleCustomInput />}
            />
          </div>
        </CalendarWrapper>

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
    </Form> : null}
  </div>)
    
}
