import Balance from '../../components/Balance/Balance'
import { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Summary from '../../components/Summary'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import s from './BalanceView.module.css'
import toast, { Toaster } from 'react-hot-toast'
import { TransactionsWrapper } from '../../components/TransactionsWrapper/TransactionsWrapper.styled'
import { NavigationWrapper } from '../../components/TransactionsWrapper/NavigationWrapper.styled'
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
  const selectedDate = useSelector(transactionsSelectors.currentDate)
  const transactions = useSelector(transactionsSelectors.getTransactions)

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
        id
        // onTransactionRemoveSuccess,
        // onTransactionRemoveError
      )
    )

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

  const onTransactionRemoveError = (error) => {
    toast.error('Не удалось удалить транзакцию, попробуйте позже!')
  }

  const viewPort = useWindowDimensions()

  return (
    <>
      <NavigationWrapper>
      <ReportsButton />
      <Balance />
      </NavigationWrapper>
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
            <TransactionForm options={optionsExpense} onSubmit={handleSubmit} />
            {viewPort.width > 768 && (
              <TransTable
                transactions={transactions}
                onDelete={onDeleteTransaction}
              />
            )}
            {viewPort.width < 768 && (
              <MobTransTable
                transactions={transactions}
                onDelete={onDeleteTransaction}
              />
            )}
            {viewPort.width > 768 && <Summary />}
          </div>
        ) : (
          <div>
            <TransactionForm
              profit={profits}
              options={optionsProfit}
              onSubmit={handleSubmit}
            />
            {viewPort.width > 768 && (
              <TransTable
                profit={profits}
                transactions={transactions}
                onDelete={onDeleteTransaction}
              />
            )}
            {viewPort.width < 768 && (
              <MobTransTable
                profit={profits}
                transactions={transactions}
                onDelete={onDeleteTransaction}
              />
            )}
            {viewPort.width > 768 && <Summary profits={profits} />}
          </div>
        )}
        {/* {expense && viewPort.width > 771 && <Summary />}
        {!expense && viewPort.width > 771 && <Summary profits={profits} />} */}
      </TransactionsWrapper>
      <Toaster />
    </>
  )
}

export default BalanceView
