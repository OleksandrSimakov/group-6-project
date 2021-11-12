import React from 'react'
import { useSelector } from 'react-redux'
import { HeaderSection, Logo } from './Header.styled'
import { authSelectors } from '../../redux/auth'
import UserMenu from '../UserMenu/UserMenu'
import { ReactComponent as LogoIcon } from '../../images/logo.svg'

export default function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

  return (
    <>
      <HeaderSection>
        <Logo>
          <LogoIcon />
        </Logo>
        {isLoggedIn && <UserMenu />}
      </HeaderSection>
    </>
  )
}
