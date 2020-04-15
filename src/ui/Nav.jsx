import React from 'react'
import { Link } from 'react-router-dom'

const Nav = props => {
    const { context } = props;

    return (
        <div className={`main-nav main-nav--${context}`}>
            <Link className="main-nav__item" exact to="/varela">Varela</Link>
            <Link className="main-nav__item" exact to="/actif">Actif</Link>
            <Link className="main-nav__item" exact to="/gallery">Projet</Link>
            <Link className="main-nav__item" exact to="/contact">Contact</Link>
        </div>
    )
}

export default Nav
