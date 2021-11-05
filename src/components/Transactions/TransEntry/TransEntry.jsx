import {
  InputWrapper,
  Input,
  Currency,
  CalculatorIcon,
} from './TransEntry.styled'
import { ReactComponent as Calculator } from '../../../images/calculator.svg'
import { useState } from 'react'

const InputValue = () => {
  const entryBalance = 0
  const [balance, setBalance] = useState(entryBalance.toFixed(2))

  const handleBalanceChange = (e) => {
    setBalance(e.target.value)
  }

  return (
    <InputWrapper>
      <Input type="number" onChange={handleBalanceChange} value={balance} />
      <Currency>UAH</Currency>
      <CalculatorIcon>
        <Calculator />
      </CalculatorIcon>
    </InputWrapper>
  )
}

export default InputValue
