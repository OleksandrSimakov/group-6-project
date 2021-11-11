import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { authOperations, authSelectors } from '../../redux/auth'
import defaultAvatar from '../../images/default-avatar.png'
import { IoLogOutOutline } from 'react-icons/io5'
import {
  UserImg,
  UserName,
  UserMenuContainer,
  VerticalLine,
  MobileExitButton,
  ExitButton,
} from './UserMenu.styled'

export default function UserMenu() {
  const dispatch = useDispatch()
  const userEmail = useSelector(authSelectors.getUserEmail)
  const avatar = defaultAvatar
  const history = useHistory()

  const handleLogOut = () => {
    dispatch(authOperations.logOut())
    history.push('/login')
  }

  return (
    <UserMenuContainer>
      <UserImg src={avatar} alt="" width="32" />
      <UserName>{userEmail}</UserName>
      <VerticalLine />
      <ExitButton type="button" onClick={() => handleLogOut()}>
        Выйти
      </ExitButton>
      <MobileExitButton type="button" onClick={() => handleLogOut()}>
        <IoLogOutOutline color="#CBCCD0" />
      </MobileExitButton>
    </UserMenuContainer>
  )
}
