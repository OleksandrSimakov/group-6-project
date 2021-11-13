import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState, useCallback } from 'react'
import { useWindowWidth } from '@react-hook/window-size'
import { useLocation } from 'react-router-dom'
import { ZeroBalanceModal } from '../Modal/ZeroBanalceModal/ZeroBalanceModal'
import {
  BalanceForm,
  BalanceLabel,
  BalanceInput,
  BalanceButton,
  BalanceWrapper,
} from './Balance.styled'

// import getBalance from '../../redux/balance/balance-selectors'
import balanceOperations from '../../redux/balance/balance-operations'

const Balance = () => {
  // const currentBalance = useSelector(getBalance)
  const entryBalance = ''
  const [balance, setBalance] = useState(entryBalance)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(balanceOperations.getBalance())
  }, [dispatch])

  const handleChange = (e) => {
    const balance = e.target.value
    setBalance(balance)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    dispatch(balanceOperations.addBalance(+balance))
    setBalance('')
  }

  return (
    <>
      <BalanceForm onSubmit={handleSubmit}>
        <BalanceLabel>Баланс:</BalanceLabel>
        <BalanceWrapper>
          <BalanceInput
            autoComplete="off"
            type="text"
            value={balance}
            onChange={handleChange}
            name="balance"
            placeholder="00.00 UAH"
            pattern="\d+(\.\d{2})"
            required
          />
          <BalanceButton type="submit">ПОДТВЕРДИТЬ</BalanceButton>
        </BalanceWrapper>
      </BalanceForm>

      <ZeroBalanceModal></ZeroBalanceModal>
    </>
  )
}

export default Balance
