import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Varela from './components/Varela'
import './main.scss'
import Activite from './components/Activite'
import Folio from './components/Folio'
import PremiereVis from './components/PremiereVis/PremiereVis'

import Footer from './components/header-footer/Footer'
import Header from './components/header-footer/Header'
// import Consultation from './components/Consultation/Consultation'


const Routes = () => (
    <BrowserRouter>
        <div>
            <Route path="/" render={props => (props.location.pathname !== '/') && <Header/> }/>
            <Route exact path="/" component={Home} />
            <Route exact path="/varela" component={Varela} />
            <Route exact path="/activité" component={Activite} />
            <Route exact path="/folio" component={Folio} />
            <Route exact path="/contact" component={PremiereVis} />
        <Footer />
        </div>
    </BrowserRouter>
)

ReactDOM.render(<Routes />, document.getElementById('root'))
