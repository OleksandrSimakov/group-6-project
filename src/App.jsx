import { useEffect, Suspense, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom'
import {authOperations, authSelectors} from './redux/auth';
import { MainContainer } from './components/Container/Container.styled'
import Header from './components/Header/Header'
// import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomeView = lazy(() => import('./views/Home' /* webpackChunkName: "home-page" */));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrentUser);
  // console.log(`isFetchingCurrentUser`, isFetchingCurrentUser)

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    isFetchingCurrentUser ? (
        <h2>Loading...</h2>
      ) : (  
      <MainContainer>
        <Header />
        <Switch>
            <Suspense fallback={<h2>Loading...</h2>}/>
            <PublicRoute path="/"  exact restricted redirectTo="/transactions" >
              <HomeView />
          </PublicRoute>
        </Switch>   
      </MainContainer>
    )
  )
}
