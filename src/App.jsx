// import { Suspense } from 'react'
// import { Switch } from 'react-router-dom'
// import PrivateRoute from './components/PrivateRoute'
// import routes from './routes'
import { MainContainer } from './components/Container/Container.styled'
import Header from './components/Header/Header'
import { Main } from './components/Main/Main.styled'
import StatsChart from './components/Chart/StatsChart'
import BalanceView from './views/BalanceView/BalanceView'

export default function App() {
  return (
    <MainContainer>
      <Header />
      <Main />
      <BalanceView />
      <StatsChart />
      {/* <Switch>
        <Suspense fallback={<p>Загружаем...</p>}></Suspense>
        <PrivateRoute
          path={routes.balance}
          component={BalanceView}
          redirectTo={routes.home}
        />
      </Switch> */}
    </MainContainer>
  )
}
