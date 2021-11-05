import ExpenseView from '../BalanceView/ExpencesView/ExpencesView'

import React, { useEffect, useState } from 'react'
import Summary from '../../components/Summary/Summary'
import summary from './BalanceView.module.css'
import useWindowDimensions from '../../hook/useWindowDimensions'

const BalanceView = () => {
  const viewPort = useWindowDimensions()
  const [date, setDate] = useState('')
  const [year, setYear] = useState('')

  const day = new Date()

  const startDate = `${day.getDate()}.${
    day.getMonth() + 1
  }.${day.getFullYear()}`

  useEffect(() => {
    setDate(startDate)
    setYear(startDate.split('.')[2])
  }, [])

  return (
    <>
      <ExpenseView />
      <div className={summary}>
        {viewPort.width > 771 && <Summary year={year} />}
      </div>
    </>
  )
}

export default BalanceView
