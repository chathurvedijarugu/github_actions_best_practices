import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReportsPage from './pages/ReportsPage'
import Header from './components/organisms/Header'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/myAppointments" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
