import { Suspense } from 'react'
import { Switch } from 'react-router-dom'
import { MainContainer } from './components/Container/Container.styled'
import Header from './components/Header/Header'
import { Main } from './components/Main/Main.styled'
/* import PrivateRoute from './components/PrivateRoute' */
import BalanceView from './views/BalanceView/BalanceView'

export default function App() {
  return (
    <MainContainer>
      <Header />
      <Main>
        <BalanceView />
        <Switch>
          <Suspense fallback={<p>Загружаем...</p>}></Suspense>
          {/*  <PrivateRoute path="/home" redirectTo="/login"> */}

          {/* </PrivateRoute> */}
        </Switch>
      </Main>
    </MainContainer>
  )
}
