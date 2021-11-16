import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { authSelectors } from '../redux/auth'

import Header from './Header/Header'
import Background from './Background/Background'
import LoginPage from '../views/HomeView'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated)

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthenticated) {
          return <LoginPage />
        }
        if (isAuthenticated) {
          return (
            <Background>
              <Header />
              <Component {...props} />
            </Background>
          )
        } else {
          return <Redirect to={{ pathname: '/login' }} />
        }
      }}
    />
  )
}

export default PrivateRoute
