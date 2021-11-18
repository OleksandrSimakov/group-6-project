import React from 'react'
import { SiteTitle, SiteTitleDescr } from '../components/Home/Home.styled'
import Registration from '../components/Registration/Registration'

const HomeView = () => {
  return (
    <>
      <SiteTitle>
        <SiteTitleDescr>Smart Finance</SiteTitleDescr>
      </SiteTitle>

      <Registration />
    </>
  )
}

export default HomeView
