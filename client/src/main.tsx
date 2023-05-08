import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './style/GlobalStyle.ts'
import { RoutesApp as Routes } from './router.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <>
    <GlobalStyle/>
      <Routes/>
    </>
  </React.StrictMode>,
)
