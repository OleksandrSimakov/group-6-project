import React, { lazy, useEffect, useState } from "react"
import WindowDimensions from '../../hooks/useWindowDimensions'
import s from './ReportView.module.css'
import { useRouteMatch, useLocation,} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import reportOperations from '../../redux/report/report-operations'


const Balance = lazy(() => import('../../components/Balance/Balance'))
const ChartComponent = lazy(() => import('../../components/ChartsComponent/ChartComponent'))
const CurrentMonth = lazy(() => import('../../components/CurrentMonth/CurrentMonth'))
const CurrentAmount = lazy(() => import('../../components/CurrentAmount/CurrentAmount'))
const ArrowGoBack = lazy(() => import('../../components/ArrowGoBack/ArrowGoBack'))
const OnHandleCategories = lazy(() => import('../../components/OnHandleCategories/OnHandleCategories'))
//const CategoriesList = lazy(() => import('../../components/CategoriesList/CategoriesList'));



const ReportView = () => {
  const window = WindowDimensions()
  const dispatch = useDispatch()

  let date = new Date();
  const [month, setMonth] = useState(date.getMonth() + 1)
  const [year, setYear] = useState(date.getFullYear())
  const [category, setCategory] = useState('');
  const [type, setType] = useState('expense')

  const transactionsIncomeDetail = reportOperations.getIncomeDetail(`${year}-${month}`)
  const transactionsExpenseDetail = reportOperations.getExpenseDetail(`${year}-${month}`)


  useEffect(() => {
    if ((month, year)) {
      switch (type) {
        case 'expense':
          dispatch(reportOperations.getExpenseDetail(`${year}-${month}`))
          break;
        case 'income':
          dispatch(reportOperations.getIncomeDetail(`${year}-${month}`))
          break;
        default:
          dispatch(reportOperations.getExpenseDetail(`${year}-${month}`))
          break;
      }    
    }
  }, [dispatch, month, year]);

  const onHandleClickRight = () => {
    if (month < 12) {
      setMonth(prev => (prev += 1));
    } else {
      setMonth(1);
      setYear(prev => (prev += 1));
    }
  };
  const onHandleClickLeft = () => {
    if (month <= 1) {
      setMonth(12);
      setYear(prev => (prev -= 1));
    } else {
      setMonth(prev => (prev -= 1));
    }
  };
  const onHandleChangeType = () => {
    if (type === 'expense') {
      setType('income');
      setCategory('');
    }
    if (type === 'income') {
      setType('expense');
      setCategory('');
    }
  };
  const getCategory = e => {
    setCategory(e.target.attributes.title.nodeValue);
  };

  return (
    <div className={s.container}>
      {window.width > 767 ?
        <div className={s.navigation}>
          <ArrowGoBack />
          <Balance />
          <CurrentMonth
            month={month}
            year={year}
            onHandleClickRight={onHandleClickRight}
            onHandleClickLeft={onHandleClickLeft} />
        </div>
        :
        <div className={s.navigation}>
          <ArrowGoBack />
          <CurrentMonth
            month={month}
            year={year}
            onHandleClickRight={onHandleClickRight}
            onHandleClickLeft={onHandleClickLeft}/>
          <Balance />
        </div>}
      <div className={s.amoumt}>
        <CurrentAmount />
      </div>
      <div className={s.amoumt}>
        <OnHandleCategories type={type} onHandleChangeType={onHandleChangeType} />
      </div>
      {/* <ChartComponent /> */}
    </div>
  )
}

export default ReportView