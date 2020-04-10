import React from 'react'
import { Link } from 'react-router-dom'

const Nav = props => {
    const { context } = props;

    return (
        <div className={`main-nav main-nav--${context}`}>
            <Link className="main-nav" exact to="/varela">Varela↩</Link>
            <Link className="main-nav" exact to="/actif">Actif</Link>
            <Link className="main-nav" exact to="/gallery">Projet</Link>
            <Link className="main-nav" exact to="/contact">Contact</Link>
        </div>
    )
}

export default Nav
