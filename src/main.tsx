import React from 'react'
import ReactDOM from 'react-dom/client'
import { PortfolioPage } from './pages/portfolio'
import { GlobalStyle } from './app/styles/GlobalStyle'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <PortfolioPage />
  </React.StrictMode>,
)
