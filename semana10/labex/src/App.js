import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import ApplicationFormPage from './components/ApplicationFormPage'
import CreateTripPage from './components/CreateTripPage'
import ListTripsPage from './components/ListTripsPage'
import Router from './components/Router'
import TripDetailsPage from './components/TripDetailsPage'

function App() {
  return (
    <div>
      <Header />
      <CreateTripPage />
      <ApplicationFormPage />
      <Footer />
    </div>
  )
}

export default App