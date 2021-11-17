import {
  Background,
  Cabbages,
  MobileTopCabbage,
  BottomCabbage,
  MobileBottomCabbage,
} from '../components/Home/Home.styled'

import Header from './Header/Header'

import { Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { authSelectors } from '../redux/auth'

import Balance from '../views/BalanceView/BalanceView'

const PublicRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated)
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <>
            <Header />
            <Background>
              <Balance />
            </Background>
          </>
        ) : (
          <>
            <Header />
            <Background>
              <Cabbages>
                <Component {...props} />
              </Cabbages>
              <MobileTopCabbage />
            </Background>
            <MobileBottomCabbage />
            <BottomCabbage />
          </>
        )
      }
    />
  )
}

export default PublicRoute
