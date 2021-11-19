import React, { lazy, useEffect, useState } from 'react'
import WindowDimensions from '../../hooks/useWindowDimensions'
import s from './ReportView.module.css'

import { useDispatch, useSelector } from 'react-redux'
import SummaryByCategory from '../../components/SummaryByCategory/SummaryByCategory'

import reportOperations from '../../redux/report/report-operations'
import reportSelectors from '../../redux/report/report-selectors'

const Balance = lazy(() => import('../../components/Balance/Balance'))
const ChartComponent = lazy(() =>
  import('../../components/ChartsComponent/ChartComponent'),
)
const CurrentMonth = lazy(() =>
  import('../../components/CurrentMonth/CurrentMonth'),
)
const CurrentAmount = lazy(() =>
  import('../../components/CurrentAmount/CurrentAmount'),
)
const ArrowGoBack = lazy(() =>
  import('../../components/ArrowGoBack/ArrowGoBack'),
)
const OnHandleCategories = lazy(() =>
  import('../../components/OnHandleCategories/OnHandleCategories'),
)

const ReportView = () => {
  const window = WindowDimensions()
  const dispatch = useDispatch()

  let date = new Date()
  const [month, setMonth] = useState(date.getMonth() + 1)
  const [year, setYear] = useState(date.getFullYear())
  const [category, setCategory] = useState('')
  // console.log(category);
  const [type, setType] = useState('expense')

  const getIncomeDetail = useSelector(reportSelectors.getIncomeDetail)
  const getExpenseDetail = useSelector(reportSelectors.getExpenseDetail)
  const getTotalIncome = useSelector(reportSelectors.getTotalIncome)
  const getTotalExpense = useSelector(reportSelectors.getTotalExpense)
  const [totalIncome, setTotalIncome] = useState(getTotalIncome)
  const [totalExpense, setTotalExpense] = useState(getTotalExpense)

  useEffect(() => {
    setTotalIncome(getTotalIncome)
    setTotalExpense(getTotalExpense)
  }, [getTotalIncome, getTotalExpense])

  const onHandleClickRight = () => {
    if (month < 12) {
      setMonth((prev) => (prev += 1))
    } else {
      setMonth(1)
      setYear((prev) => (prev += 1))
    }
  }
  const onHandleClickLeft = () => {
    if (month <= 1) {
      setMonth(12)
      setYear((prev) => (prev -= 1))
    } else {
      setMonth((prev) => (prev -= 1))
    }
  }
  const onHandleChangeType = () => {
    if (type === 'expense') {
      setType('income')
      setCategory('')
    }
    if (type === 'income') {
      setType('expense')
      setCategory('')
    }
  }

  useEffect(() => {
    dispatch(reportOperations.getExpenseDetail(`${year}-${month}`))
    dispatch(reportOperations.getIncomeDetail(`${year}-${month}`))
  }, [dispatch, month, year, type])

  const handleCategoryClick = (category) => {
    setCategory(category)
  }

  return (
    <div className={s.container}>
      {window.width > 768 ? (
        <div className={s.navigation}>
          <ArrowGoBack />
          <Balance />
          <CurrentMonth
            month={month}
            year={year}
            onHandleClickRight={onHandleClickRight}
            onHandleClickLeft={onHandleClickLeft}
          />
        </div>
      ) : (
        <div className={s.navigation}>
          <ArrowGoBack />
          <CurrentMonth
            month={month}
            year={year}
            onHandleClickRight={onHandleClickRight}
            onHandleClickLeft={onHandleClickLeft}
          />
          <Balance />
        </div>
      )}
      <div className={s.amoumt}>
        <CurrentAmount totalIncome={totalIncome} totalExpense={totalExpense} />
      </div>
      <div className={s.amoumt}>
        <OnHandleCategories
          type={type}
          onHandleChangeType={onHandleChangeType}
        />
        {type === 'expense' ? (
          <SummaryByCategory
            transactions={getExpenseDetail}
            onClick={handleCategoryClick}
          />
        ) : (
          <SummaryByCategory
            transactions={getIncomeDetail}
            onClick={handleCategoryClick}
          />
        )}
        </div>
      <ChartComponent
        type={type}
        getExpenseDetail={getExpenseDetail}
        getIncomeDetail={getIncomeDetail}
        category={category}
      />
    </div>
  )
}

export default ReportView
