import { useEffect /*, Suspense, lazy */ } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authOperations, authSelectors } from './redux/auth'
import { MainContainer } from './components/Container/Container.styled'
import Header from './components/Header/Header'
import StatsChart from './components/Chart/StatsChart'
import BalanceView from './views/BalanceView/BalanceView'
import Home from './views/Home'

export default function App() {
  const dispatch = useDispatch()
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  )

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser())
  }, [dispatch])

  return isFetchingCurrentUser ? (
    <h2>Loading...</h2>
  ) : (
    <MainContainer>
      <Header />
      {/* <Home /> */}
      <BalanceView />
      <StatsChart />
    </MainContainer>
  )
}
