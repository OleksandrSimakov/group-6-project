import { Suspense, lazy } from 'react'
import { Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import routes from './routes'

const BalanceView = lazy(() =>
  import('./views/BalanceView' /*webpackChunkName: "balance-view" */),
)

export default function App() {
  return (
    <>
      <Switch>
        <Suspense fallback={<p>Загружаем...</p>}></Suspense>
        <PrivateRoute
          path={routes.balance}
          component={BalanceView}
          redirectTo={routes.home}
        />
      </Switch>
    </>
  )
}
