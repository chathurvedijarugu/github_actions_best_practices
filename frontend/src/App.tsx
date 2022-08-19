import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReportsPage from './pages/ReportsPage'
import HomePage from './pages/homePage'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/myAppointments" />
        <Route path="/" element={<SelectAddressPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
