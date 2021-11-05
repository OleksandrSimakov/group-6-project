import { useState, useEffect } from 'react'
import { ReactComponent as CalendarIcon } from '../../../images/calendar.svg'
import {
  DateContainer,
  CalendarWrapper,
  DateSelectorWrapper,
  CalendarIconWrapper,
  ExampleCustomInput,
} from './DateSeelector.styled'

import ReactDateSelector from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
// import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css'

const DateSelector = () => {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <CalendarWrapper>
      <CalendarIconWrapper>
        <CalendarIcon />
      </CalendarIconWrapper>
      <DateSelectorWrapper>
        <ReactDateSelector
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd.MM.yyyy"
          fixedHeight
          customInput={<ExampleCustomInput />}
        />
      </DateSelectorWrapper>
    </CalendarWrapper>
  )
}

export default DateSelector
