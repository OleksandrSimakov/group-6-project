import React from 'react'
import { Header, HeaderDescr } from '../components/Home/Home.styled'
import Registration from '../components/Registration/Registration'

const HomeView = () => {
  return (
    <>
      <Header>
        <HeaderDescr>Smart Finance</HeaderDescr>
      </Header>

      <Registration />
    </>
  )
}

export default HomeView
