import Balance from '../../components/Balance/Balance'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Summary from '../../components/Summary'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import s from './BalanceView.module.css'
import { TransactionsWrapper } from '../../components/TransactionsWrapper/TransactionsWrapper.styled'
import TransTable from '../../components/Transactions/TransTable/TransTable'
// import MobTransTable from '../../components/Transactions/MobileTransTable/MobTransTable'
import transactionOperations from '../../redux/transactions/transactions-operations'
import transactionsSelectors from '../../redux/transactions/transactions-selectors'
import TransactionForm from '../../components/Transactions/TransForm/TransForm'
import { format } from 'date-fns'

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

  const handleSubmit = (data) => {
    if (profits) {
      dispatch(transactionOperations.addIncome(data))
    }
    if (expense) {
      dispatch(transactionOperations.addExpense(data))
    }
  }

  const onDeleteTransaction = (id) => {
    dispatch(transactionOperations.deleteTransaction(id))
  }

  const viewPort = useWindowDimensions()

  return (
    <>
      <Balance />

      <TransactionsWrapper>
        <div>
          <button
            type="button"
            onClick={clickExpense}
            className={
              expense
                ? `${s.counter_tab_header_buttons} ${s.counter_tab_active}`
                : `${s.counter_tab_header_buttons}`
            }
          >
            Расход
          </button>
          <button
            type="button"
            onClick={clickProfits}
            className={
              profits
                ? `${s.counter_tab_header_buttons} ${s.counter_tab_active}`
                : `${s.counter_tab_header_buttons}`
            }
          >
            Доход
          </button>
        </div>

        {expense ? (
          <>
            <TransactionForm options={optionsExpense} onSubmit={handleSubmit} />
            {viewPort.width > 768 && (
              <TransTable
                transactions={transactions}
                onDelete={onDeleteTransaction}
              />
            )}
            {/* {viewPort.width < 768 && <MobTransTable />} */}
            {viewPort.width > 768 && <Summary />}
          </>
        ) : (
          <>
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
            {/* {viewPort.width < 768 && <MobTransTable />} */}
            {viewPort.width > 768 && <Summary profits={profits} />}
          </>
        )}
        {/* {expense && viewPort.width > 771 && <Summary />}
        {!expense && viewPort.width > 771 && <Summary profits={profits} />} */}
      </TransactionsWrapper>
    </>
  )
}

export default BalanceView
