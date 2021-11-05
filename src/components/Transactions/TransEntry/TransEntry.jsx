import {
  InputWrapper,
  Input,
  Currency,
  CalculatorIcon,
} from './TransEntry.styled'
// import { CgCalculator } from 'react-icons/cg'
import { ReactComponent as Calculator } from '../../../images/calculator.svg'

const InputValue = () => {
  return (
    <InputWrapper>
      <Input type="number" />
      <Currency>UAH</Currency>
      <CalculatorIcon>
        <Calculator />
      </CalculatorIcon>
    </InputWrapper>
  )
}

export default InputValue
