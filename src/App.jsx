// import { Suspense } from 'react'
// import { Switch } from 'react-router-dom'
import { MainContainer } from './components/Container/Container.styled'
import Header from './components/Header/Header'
import Home from './components/Home/Home.jsx'

export default function App() {
  return (
    <MainContainer>
      <Header />
      <Home/>
    </MainContainer>
  )
}
