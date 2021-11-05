import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Summary.module.css'
import * as selectors from '../../redux/transactions/transactions-selectors'
import transactionsOperations from '../../redux/transactions/transactions-operations'
import data from '../../data/month.json'

const Summary = ({ year }) => {
  const totalBalance = useSelector(selectors.getTotalBalance)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(transactionsOperations.getMonthlyBalancesYear(year))
  }, [totalBalance, year, dispatch])

  const balances = useSelector(selectors.getMonthlyBalances)
  const sortedBalances = [...balances].sort((a, b) => b.month - a.month)

  return (
    <div className={styles.summaryContainer}>
      <h4 className={styles.summaryTitle}>Сводка</h4>
      <ul className={styles.summaryList}>
        {sortedBalances.map(({ month, value }, index) => (
          <li key={index} className={styles.summaryItem}>
            <p className={styles.summaryDescription}>
              {data.find((monthData) => monthData.id === month).name}
            </p>
            <p className={styles.summaryDescription}>{value}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Summary
