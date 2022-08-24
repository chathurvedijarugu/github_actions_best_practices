import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReportsPage from './pages/ReportsPage'
import HomePage from './pages/homePage'
import CheckoutPage from './pages/Checkout'
// import SelectAddressPage from './pages/SelectAddressPage'
import AddAddressPage from './pages/AddAddressPage'
import {getPatientLabDetails } from './services/services'
import { useCheckout } from './pages/Checkout/hook'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CheckoutPage />} />
        {/* <Route path="/reports" element={<ReportsPage />} />
        <Route path="/myAppointments" />
        <Route path="/selectAddressPage" element={<SelectAddressPage />} />
        <Route path="/AddAddressPage" element={<AddAddressPage />} />
        <Route path="/checkout" element={<CheckoutPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
