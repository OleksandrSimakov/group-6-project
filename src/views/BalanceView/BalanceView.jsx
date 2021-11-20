import Balance from '../../components/Balance/Balance'
import { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import s from './BalanceView.module.css'
import toast from 'react-hot-toast'
import { TransactionsWrapper } from '../../components/TransactionsWrapper/TransactionsWrapper.styled'
import { ButtonsWrapper } from '../../components/TransactionsWrapper/ButtonsWrapper.styled'
import TransTable from '../../components/Transactions/TransTable/TransTable'
import MobTransTable from '../../components/Transactions/MobileTransTable/MobTransTable'
import transactionOperations from '../../redux/transactions/transactions-operations'
import balanceOperations from '../../redux/balance/balance-operations'
import { summaryOperations } from '../../redux/transactions'
import transactionsSelectors from '../../redux/transactions/transactions-selectors'
import TransactionForm from '../../components/Transactions/TransForm/TransForm'
import { format } from 'date-fns'
import ReportsButton from '../../components/ReportsButton/ReportsButton'
import { Link } from 'react-router-dom'
import ru from 'date-fns/locale/ru'
import transactionsActions from '../../redux/transactions/transactions-actions'
import { ReactComponent as CalendarIcon } from '../../images/calendar.svg'
import ReactDateSelector from 'react-datepicker'
import {
  CalendarWrapper,
  CalendarIconWrapper,
  ExampleCustomInput,
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

const BalanceView = () => {
  const dispatch = useDispatch()
  const [expense, setExpense] = useState(true)
  const [profits, setProfits] = useState(false)
  const [date, setDate] = useState(new Date())
  const selectedDate = useSelector(transactionsSelectors.currentDate)
  const transactions = useSelector(transactionsSelectors.getTransactions)
  // const getLastTransactions = useSelector(transactionsSelectors.getLast)

  const selectDate = (date) => {
    setDate(date)
    const formatDate = format(new Date(date), 'yyyy-MM-dd')
    dispatch(transactionsActions.setDate(formatDate))
  }

  useEffect(() => {
    const date = format(new Date(), 'yyyy-MM-dd')
    dispatch(transactionOperations.getExpenseByDate(date))
  }, [dispatch])

  const clickExpense = () => {
    if (expense) return
    setProfits(false)
    setExpense(true)
  }

  const clickProfits = () => {
    if (profits) return
    setProfits(true)
    setExpense(false)
    const date = format(new Date(), 'yyyy-MM-dd')
    dispatch(transactionOperations.getIncomeByDate(date))
  }

  const getTransactionIncome = useCallback(() => {
    dispatch(summaryOperations.getIncomeByMonth())
  }, [dispatch])

  const getTransactionExpense = useCallback(() => {
    dispatch(summaryOperations.getExpenseByMonth())
  }, [dispatch])

  const onTransactionAddSuccess = () => {
    toast.success('Транзакция успешно добавлена!')
    dispatch(balanceOperations.getBalance())
    if (profits) {
      dispatch(transactionOperations.getIncomeByDate(selectedDate))
      getTransactionIncome()
    }
    if (expense) {
      dispatch(transactionOperations.getExpenseByDate(selectedDate))
      getTransactionExpense()
    }
  }

  const onTransactionAddError = (error) => {
    toast.error('Не удалось добавить транзакцию, попробуйте позже!')
  }

  const handleSubmit = (data) => {
    if (profits) {
      dispatch(
        transactionOperations.addIncome(
          data,
          onTransactionAddSuccess,
          onTransactionAddError
        )
      )
    }
    if (expense) {
      dispatch(
        transactionOperations.addExpense(
          data,
          onTransactionAddSuccess,
          onTransactionAddError
        )
      )
    }
  }

  const onDeleteTransaction = (id) => {
    dispatch(
      transactionOperations.deleteTransaction(
        id,
        onTransactionRemoveSuccess,
        onTransactionRemoveError
      )
    )
  }

  const onTransactionRemoveSuccess = () => {
    toast.success('Транзакция успешно удалена!')
    dispatch(balanceOperations.getBalance())
    if (profits) {
      dispatch(transactionOperations.getIncomeByDate(selectedDate))
      getTransactionIncome()
    }
    if (expense) {
      dispatch(transactionOperations.getExpenseByDate(selectedDate))
      getTransactionExpense()
    }
  }

  const onTransactionRemoveError = () => {
    toast.error('Не удалось удалить транзакцию, попробуйте позже!')
  }

  const viewPort = useWindowDimensions()

  return (
    <>
      {viewPort.width > 767 && (
        <>
          <div className={s.navigation}>
            <Balance />
            <ReportsButton />
          </div>
          <ButtonsWrapper>
            <div>
              <button
                type="button"
                onClick={clickExpense}
                className={
                  expense
                    ? `${s.counter_tab_header_buttons_in} ${s.counter_tab_active}`
                    : `${s.counter_tab_header_buttons_in}`
                }
              >
                Расход
              </button>
              <button
                type="button"
                onClick={clickProfits}
                className={
                  profits
                    ? `${s.counter_tab_header_buttons_out} ${s.counter_tab_active}`
                    : `${s.counter_tab_header_buttons_out}`
                }
              >
                Доход
              </button>
            </div>
          </ButtonsWrapper>
          <TransactionsWrapper>
            {expense ? (
              <div>
                <TransactionForm
                  options={optionsExpense}
                   onSubmit={handleSubmit}
                />
                <TransTable
                  transactions={transactions}
                  onDelete={onDeleteTransaction}
                />
              </div>
            ) : (
              <div>
                <TransactionForm
                  profit={profits}
                  options={optionsProfit}
                  onSubmit={handleSubmit}
                />
                <TransTable
                  profit={profits}
                  transactions={transactions}
                  onDelete={onDeleteTransaction}
                />
              </div>
            )}
          </TransactionsWrapper>
        </>
      )}
      {viewPort.width < 768 && (
        <>
          <div className={s.navigation}>
            <ReportsButton />
            <Balance />
            <CalendarWrapper>
              <CalendarIconWrapper>
                <CalendarIcon />
              </CalendarIconWrapper>
              <ReactDateSelector
                locale={ru}
                selected={date}
                onChange={(date) => selectDate(date)}
                dateFormat="dd.MM.yyyy"
                fixedHeight
                customInput={<ExampleCustomInput />}
              />
            </CalendarWrapper>
          </div>
          <TransactionsWrapper>
            <div>
              <TransactionForm
                options={optionsExpense}
                onSubmit={handleSubmit}
              />
              <MobTransTable />
            </div>
          </TransactionsWrapper>
          <ButtonsWrapper>
            <Link to="/expense">
              <button
                type="button"
                onClick={clickExpense}
                className={
                  expense
                    ? `${s.counter_tab_header_buttons_in} ${s.counter_tab_active}`
                    : `${s.counter_tab_header_buttons_in}`
                }
              >
                Расход
              </button>
            </Link>
            <Link to="/profit">
              <button
                type="button"
                onClick={clickProfits}
                className={
                  profits
                    ? `${s.counter_tab_header_buttons_out} ${s.counter_tab_active}`
                    : `${s.counter_tab_header_buttons_out}`
                }
              >
                Доход
              </button>
            </Link>
          </ButtonsWrapper>
        </>
      )}
    </>
  )
}

export default BalanceView
