// import { Switch, Redirect } from 'react-router-dom'
// import PublicRoute from '../components/PublicRoute'
// import PrivateRoute from '../components/PrivateRoute'
// import { Suspense, lazy } from 'react'

// const LoginPage = lazy(() => import('../views/HomeView'))
// const MainPage = lazy(() => import('../views/BalanceView/BalanceView'))
// const TransactionView = lazy(() =>
//   import('../views/TransactionView/TransactionView'),
// )

// const WaitPage = lazy(() => import('../views/WaitPage'))

// const ReportPage = lazy(() => import('../views/ReportView/ReportView'))

// export default function useRoutes() {
//   return (
//     <Suspense fallback={<h2>Загружаем...</h2>}>
//       <Switch>
//         <PublicRoute exact path="/login" component={LoginPage} />
//         <PublicRoute exact path="/google-redirect" component={WaitPage} />
//         <PrivateRoute exact path="/balance" component={MainPage} />
//         <PrivateRoute exact path="/profit" component={TransactionView} />
//         <PrivateRoute exact path="/expense" component={TransactionView} />
//         <PrivateRoute exact path="/report" component={ReportPage} />
//         <Redirect to="/login" />
//       </Switch>
//     </Suspense>
//   )
// }
