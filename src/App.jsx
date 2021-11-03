import { Suspense } from 'react'
import { Switch } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Switch>
        <Suspense fallback={<p>Загружаем...</p>}></Suspense>
      </Switch>
    </>
  )
}
