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
import balanceOperations from '../../redux/balance/balance-operations'
import getBalance from '../../redux/balance/balance-selectors'

const Balance = () => {
  const currentBalance = useSelector(getBalance)
  // const entryBalance = ''
  const [balance, setBalance] = useState(currentBalance)
  const [notifyShow, setNotifyShow] = useState(true)

  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(balanceOperations.getBalance())
  // }, [dispatch])

  const handleChange = (e) => {
    const balance = e.target.value
    setBalance(balance)
  }

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      setBalance(balance)
      dispatch(balanceOperations.addBalance(+balance))
    },
    [dispatch, balance]
  )

  // useEffect(() => {
  //   setBalance(() => balance)
  // }, [balance])

  const handleClose = (condition) => setNotifyShow(condition)

  return (
    <>
      <BalanceForm onSubmit={handleSubmit}>
        <BalanceLabel htmlFor="balance">Баланс:</BalanceLabel>
        <BalanceWrapper>
          <BalanceInput
            autoComplete="off"
            type="text"
            balance={balance}
            onChange={handleChange}
            id="balance"
            placeholder="00.00 UAH"
            pattern="\d+(\.\d{2})"
            title="Баланс должен состоять из цифр, разделителя 'точка' и не более двух цифр после точки"
            required
          />
          <BalanceButton type="submit">ПОДТВЕРДИТЬ</BalanceButton>
        </BalanceWrapper>
      </BalanceForm>
      {notifyShow && currentBalance !== 0 && (
        <ZeroBalanceModal handleClose={handleClose}></ZeroBalanceModal>
      )}
    </>
  )
}

export default Balance
