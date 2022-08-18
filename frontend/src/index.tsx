import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import LoginPage from './pages/LoginPage'
import { Auth0Provider } from '@auth0/auth0-react'
import { ThemeProvider } from '@mui/material'
import theme from './theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Auth0Provider
      domain="dev-vqrz98bh.us.auth0.com"
      clientId="zgyqzFsgKoIAnjXJSHpZrcGxOX0U7pbA"
      redirectUri={window.location.origin}
    >
      <LoginPage />
    </Auth0Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('app-root')
)
