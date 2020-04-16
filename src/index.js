import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import './main.scss'

import Header from './components/header-footer/Header'
import Home from './components/home/Home'
import Footer from './components/header-footer/Footer'

const Routes = () => (
    <BrowserRouter>
        <div>
            <Route path="/" render={props => (props.location.pathname !== '/') && <Header />} />
            <Route exact path="/" component={Home} />
            <Footer />
        </div>
    </BrowserRouter>
)

ReactDOM.render(<Routes />, document.getElementById('root'))
