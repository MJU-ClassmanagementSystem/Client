import 'src/styles/index.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import App from './App.tsx'
import ErrorBoundary from './components/shared/ErrorBoundary.tsx'
import { worker } from './mocks/browsers.ts'

if (process.env.NODE_ENV === 'development') worker.start()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
    <ToastContainer />
  </React.StrictMode>,
)
