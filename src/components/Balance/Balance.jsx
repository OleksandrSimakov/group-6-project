import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
// import { useWindowWidth } from '@react-hook/window-size'
// import { useLocation } from 'react-router-dom'
import { ZeroBalanceModal } from '../Modal/ZeroBanalceModal/ZeroBalanceModal'
import {
  BalanceForm,
  BalanceLabel,
  BalanceInput,
  BalanceButton,
  BalanceWrapper,
  InputWrapper,
  CurrencyText,
} from './Balance.styled'
import balanceOperations from '../../redux/balance/balance-operations'
import balanceSelectors from '../../redux/balance/balance-selectors'
// import ReportsButton from '../../components/ReportsButton/ReportsButton'

const Balance = () => {
  const currentBalance = useSelector(balanceSelectors.balanceCurrent)
  const [balance, setBalance] = useState('')
  const [notifyShow, setNotifyShow] = useState(true)

  const dispatch = useDispatch()
  // const location = useLocation()

  useEffect(() => {
    dispatch(balanceOperations.getBalance())
  }, [dispatch])

  useEffect(() => {
    setBalance(`${parseFloat(currentBalance).toFixed(2)}` || '')
    // console.log(currentBalance)
  }, [currentBalance])

  const handleChange = (e) => {
    setBalance(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(balanceOperations.updateBalance(parseFloat(balance)))
    // setBalance('')
  }

  const handleClose = (condition) => setNotifyShow(condition)

  return (
    <>
      <BalanceForm onSubmit={handleSubmit}>
        {balance === '0.00' && notifyShow && (
          <ZeroBalanceModal handleClose={handleClose}></ZeroBalanceModal>
        )}
        <BalanceLabel htmlFor="balance">Баланс:</BalanceLabel>
        <BalanceWrapper>
          <InputWrapper>
            <BalanceInput
              autoComplete="off"
              type="text"
              value={balance}
              onChange={handleChange}
              id="balance"
              pattern="\d+(\.\d{2})"
              title="Баланс должен состоять из цифр, разделителя 'точка' и не более двух цифр после точки"
              required
            />
            <CurrencyText>UAH</CurrencyText>
          </InputWrapper>
          <BalanceButton type="submit" onClick={handleSubmit}>
            ПОДТВЕРДИТЬ
          </BalanceButton>
          {/* {location.pathname === './report' && <ReportsButton />} */}
        </BalanceWrapper>
      </BalanceForm>
    </>
  )
}

export default Balance
