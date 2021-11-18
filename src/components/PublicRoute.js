// import {
//   Background,
//   Cabbages,
//   MobileTopCabbage,
//   BottomCabbage,
//   MobileBottomCabbage,
// } from '../components/Home/Home.styled'

// import Header from './Header/Header'

// import { Route } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import { authSelectors } from '../redux/auth'

// import Balance from '../views/BalanceView/BalanceView'

// const PublicRoute = ({ component: Component, ...rest }) => {
//   const isAuthenticated = useSelector(authSelectors.getIsAuthenticated)
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated ? (
//           <>
//             <Header />
//             <Background>
//               <Balance />
//             </Background>
//           </>
//         ) : (
//           <>
//             <Header />
//             <Background>
//               <Cabbages>
//                 <Component {...props} />
//               </Cabbages>
//               <MobileTopCabbage />
//             </Background>
//             <MobileBottomCabbage />
//             <BottomCabbage />
//           </>
//         )
//       }
//     />
//   )
// }

// export default PublicRoute

import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { authSelectors } from '../redux/auth'

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  const shouldRedirect = isLoggedIn && restricted
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  )
}

// import {
//   Background,
//   Cabbages,
//   MobileTopCabbage,
//   BottomCabbage,
//   MobileBottomCabbage,
// } from '../components/Home/Home.styled'

// import Header from './Header/Header'

// import { Route, Redirect } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import { authSelectors } from '../redux/auth'

// const PublicRoute = ({ component: Component, ...rest }) => {
//   const isAuthenticated = useSelector(authSelectors.getIsAuthenticated)
//   console.log(`isAuthenticated`, isAuthenticated)
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated ? (
//           <Redirect to={{ pathname: '/balance' }} />
//         ) : (
//           <>
// <Header />
// <Background>
//   <Cabbages>
//     <Component {...props} />
//   </Cabbages>
//   <MobileTopCabbage />
// </Background>
// <MobileBottomCabbage />
// <BottomCabbage />
//           </>
//         )
//       }
//     />
//   )
// }

// export default PublicRoute
