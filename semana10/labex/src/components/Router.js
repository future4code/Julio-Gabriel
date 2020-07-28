import React from 'react'
import ReactDOM from 'react-dom'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import HomePage from './HomePage'
import ApplicationFormPage from './ApplicationFormPage'
import ListTripsPage from './ListTripsPage'
import TripDetailsPage from './TripDetailsPage'
import Admin from './Admin'
import Header from './Header'
import Footer from './Footer'
import CreateTripPage from './CreateTripPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/inscricao">
                    <ApplicationFormPage />
                </Route>
                <Route exact path="/admin">
                    <Admin />
                </Route>
                <Route exact path="/listadeviagens">
                    <ListTripsPage />
                </Route>
                <Route exact path="/detalhesdaviagem/:codigo">
                    <TripDetailsPage />
                </Route>
                <Route exact path="/paginacriarviagem">
                    <CreateTripPage />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<Router />, rootElement)
export default Router