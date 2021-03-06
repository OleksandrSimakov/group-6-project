// import { Route, Redirect } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import { authSelectors } from '../redux/auth'

// import Header from './Header/Header'
// import Background from './Background/Background'
// import LoginPage from '../views/HomeView'

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const isAuthenticated = useSelector(authSelectors.getIsAuthenticated)

//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         if (!isAuthenticated) {
//           return <LoginPage />
//         }
//         if (isAuthenticated) {
//           return (
//             <>
//               <Header />
//               <Background>
//                 <Component {...props} />
//               </Background>
//             </>
//           )
//         }
//         else {
//           return <Redirect to={{ pathname: '/login' }} />
//         }
//       }}
//     />
//   )
// }

// export default PrivateRoute

import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { authSelectors } from '../redux/auth'

export default function PrivateRoute({
  children,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  )
}

// import { Route, Redirect } from 'react-router-dom'
// import Header from './Header/Header'
// import Background from './Background/Background'
// import { useSelector } from 'react-redux'
// import { authSelectors } from '../redux/auth'

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const isAuthenticated = useSelector(authSelectors.getIsAuthenticated)

//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         if (!isAuthenticated) {
//           return <Redirect to={{ pathname: '/login' }} />
//         }
//         if (isAuthenticated) {
//           return (
//             <>
//               <Header />
//               <Background>
//                 <Component {...props} />
//               </Background>
//             </>
//           )
//         }
//         // else {
//         //   return <Redirect to={{ pathname: '/login' }} />
//         // }
//       }}
//     />
//   )
// }

// export default PrivateRoute
