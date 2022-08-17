import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'
import theme from './theme/index'
ReactDOM.render(
  <React.StrictMode>
    <MUIThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </MUIThemeProvider>
  </React.StrictMode>,
  document.getElementById('app-root')
)
