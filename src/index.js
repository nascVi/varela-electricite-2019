import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Varela from './components/Varela'
import './main.scss'
import Activite from './components/Activite'
import Folio from './components/Folio'
import Contact from './components/Contact/Contact'  

import Footer from './components/header-footer/Footer'
import Header from './components/header-footer/Header'
// import Consultation from './components/Consultation/Consultation'


const Routes = () => (
    <React.StrictMode>
        <BrowserRouter>
            <div>
                <Route path="/" render={props => (props.location.pathname !== '/') && <Header/> }/>
                <Route exact path="/" component={Home} />
                <Route exact path="/varela" component={Varela} />
                <Route exact path="/activité" component={Activite} />
                <Route exact path="/folio" component={Folio} />
                <Route exact path="/contact" component={Contact} />
            <Footer />
            </div>
        </BrowserRouter>
    </React.StrictMode>
)

ReactDOM.render(<Routes />, document.getElementById('root'))
