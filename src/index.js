import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import AppProvider from './hooks'
import RoutesApp from './routes/routes'
import GlobalStyle from './styles/GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ToastContainer autoClose={2000} theme="dark" />
    <AppProvider>
      <RoutesApp />
    </AppProvider>
    <GlobalStyle />
  </React.StrictMode>
)
