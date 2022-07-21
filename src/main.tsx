import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { UserAuthContextProvider } from './context/userAuthContext'
import App from './App'
import './assets/css/styles.css'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserAuthContextProvider>
        <App />
      </UserAuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
