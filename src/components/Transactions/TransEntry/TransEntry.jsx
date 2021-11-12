import {
  InputWrapper,
  Input,
  Currency,
  CalculatorIcon,
} from './TransEntry.styled'
import { ReactComponent as Calculator } from '../../../images/calculator.svg'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import transactionSelectors from '../../../redux/transactions/transactions-selectors'

const InputValue = ({ handleSum }) => {
  const entryBalance = 0
  const [sum, setSum] = useState(entryBalance.toFixed(2))
  const clearInput = useSelector(transactionSelectors.getClearedInputValues)

  const handleBalanceChange = (e) => {
    setSum(e.target.value)
  }

  useEffect(() => {
    handleSum(sum)
  }, [sum])

  useEffect(() => {
    setSum(entryBalance.toFixed(2))
  }, [clearInput])

  return (
    <InputWrapper>
      <Input
        type="number"
        onChange={handleBalanceChange}
        value={sum}
        onFocus={() => setSum('')}
      />
      <Currency>UAH</Currency>
      <CalculatorIcon>
        <Calculator />
      </CalculatorIcon>
    </InputWrapper>
  )
}

export default InputValue
