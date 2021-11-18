import { useEffect, Suspense, lazy } from 'react'
import { useDispatch } from 'react-redux'
import { MainContainer } from './components/Container/Container.styled'
import { authSelectors, authOperations } from './redux/auth'
import { Toaster } from 'react-hot-toast'
import Loader from 'react-js-loader'
import { Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'

import {
  Background,
  Cabbages,
  PrivateCabbages,
  MobileTopCabbage,
  BottomCabbage,
  MobileBottomCabbage,
  PrivateBottomCabbage,
  PrivateMobileBottomCabbage,
} from './components/Home/Home.styled'

import Header from './components/Header/Header'

import useWindowDimensions from './hooks/useWindowDimensions'

const LoginPage = lazy(() => import('./views/HomeView'))
const MainPage = lazy(() => import('./views/BalanceView/BalanceView'))
// const TransactionView = lazy(() =>
//   import('./views/TransactionView/TransactionView'),
// )
// const WaitPage = lazy(() => import('./views/WaitPage'))
const ReportPage = lazy(() => import('./views/ReportView/ReportView'))

export default function App() {
  const dispatch = useDispatch()
  const isFetchingCurrentUser = authSelectors.getIsFetchingCurrent

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser())
  }, [dispatch])
  const viewPort = useWindowDimensions()

  return isFetchingCurrentUser ? (
    <Loader
      type="spinner-circle"
      bgColor={'#ff751d'}
      color={'#ff751d'}
      size={60}
    />
  ) : (
    <>
      <MainContainer>
        <Header />
        <Background>
          <Switch>
            <Suspense fallback={<p>Загружаем...</p>}>
              <PublicRoute exact path="/" redirectTo="/balance" restricted>
                <Cabbages>
                  <LoginPage />
                  <MobileTopCabbage />
                  <BottomCabbage />
                  <MobileBottomCabbage />
                </Cabbages>
              </PublicRoute>
              <PrivateRoute path="/balance">
                <MainPage />
                {viewPort.width >= 1280 && <PrivateCabbages />}
                {viewPort.width > 768 && viewPort.width < 1280 && (
                  <>
                    <PrivateBottomCabbage />
                    <PrivateMobileBottomCabbage />
                  </>
                )}
              </PrivateRoute>
              <PrivateRoute path="/report">
                <ReportPage />
                {viewPort.width >= 1280 && <PrivateCabbages />}
                {viewPort.width > 768 && viewPort.width < 1280 && (
                  <>
                    <PrivateBottomCabbage />
                    <PrivateMobileBottomCabbage />
                  </>
                )}
              </PrivateRoute>
            </Suspense>
          </Switch>
        </Background>
      </MainContainer>
      <Toaster position="top-right" />
    </>
  )
}
