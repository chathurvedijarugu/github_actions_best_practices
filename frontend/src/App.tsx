import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReportsPage from './pages/ReportsPage'
import HomePage from './pages/homePage'
import AddAddressPage from './pages/AddAddressPage'
import SelectAddressPage from './pages/SelectAddressPage'
import CovidRTPCR from './pages/CovidRTPCR'
import AddPatientDetailsPage from './pages/AddPatientDetailsPage'
import SelectLabPage from './pages/SelectLab'
import SelectAppointementPage from './pages/SelectAppointementPage'
import FinalOrder from './pages/ReviewOrdersPage'
import OrderPlaced from './pages/OrderPlaced'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/covid-test" element={<CovidRTPCR />} />
        <Route path="/AddPatientDetailsPage" element={<AddPatientDetailsPage />} />
        <Route path="/selectLabPage" element={<SelectLabPage />} />
        <Route path="/appointementPage" element={<SelectAppointementPage/>}/>
        <Route path="/AddAddressPage" element={<AddAddressPage />} />
        <Route path="/selectAddressPage" element={<SelectAddressPage />} />
        <Route path="/reviewOrderPage" element={<FinalOrder />} />
        <Route path="/orderPlacedPage" element={<OrderPlaced  />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
