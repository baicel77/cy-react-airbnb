import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import router from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'


const App = memo(() => {
  return (
    <div>
      <AppHeader/>
      <div className="main">
        <Suspense fallback="loading...">
          {
            useRoutes(router)
          }
        </Suspense>
      </div>
      <AppFooter/>
    </div>
  )
})

export default App  