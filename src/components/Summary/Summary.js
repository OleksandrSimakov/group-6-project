import React, { useCallback } from 'react'
import NumberFormat from 'react-number-format'
import Loader from 'react-js-loader'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from './Summary.module.css'

import { summaryOperations, summarySelectors } from '../../redux/transactions'

export default function Summary({ profits }) {
  const dispatch = useDispatch()

  const expense = useSelector(summarySelectors.getExpenseBySixMonth)
  const income = useSelector(summarySelectors.getIncomeBySixMonth)
  const isLoading = useSelector(summarySelectors.getSummaryIsLoading)

  const items = profits ? income : expense

  const getIncome = useCallback(() => {
    dispatch(summaryOperations.getIncomeByMonth())
  }, [dispatch])

  const getExpense = useCallback(() => {
    dispatch(summaryOperations.getExpenseByMonth())
  }, [dispatch])

  useEffect(() => {
    if (profits) {
      getIncome()
    }
    if (!profits) {
      getExpense()
    }
  }, [getIncome, getExpense, profits])

  return (
    <div className={s.summary__wrapper}>
      <p className={s.summary__title}>СВОДКА</p>
      <ul className={s.summary__list}>
        {isLoading ? (
          <li>
            <Loader
              type="spinner-circle"
              bgColor={'#ff751d'}
              color={'#ff751d'}
              size={60}
            />
          </li>
        ) : (
          items.length > 0 &&
          items.map((item) => (
            <li className={s.summary__item} key={`${item.id}`}>
              <span className={s.field_month}>{item.month.toUpperCase()}</span>
              <span className={s.field_summ}>
                <NumberFormat
                  thousandsGroupStyle="thousand"
                  decimalScale={2}
                  type="text"
                  value={item.total}
                  displayType="text"
                  allowNegative={true}
                  thousandSeparator={' '}
                  fixedDecimalScale={true}
                  allowEmptyFormatting={false}
                />
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}
