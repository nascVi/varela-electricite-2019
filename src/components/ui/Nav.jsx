import React from 'react'
import { Link } from 'react-router-dom'

const Nav = props => {
    const { context } = props;

    return (
        <div className={`main-nav main-nav--${context}`}>
            <Link className="main-nav__item" exact to="/varela">Varela</Link>
            <Link className="main-nav__item" exact to="/activité">Activité</Link>
            <Link className="main-nav__item" exact to="/folio">Folio</Link>
            <Link className="main-nav__item" exact to="/info">Info</Link>
        </div>
    )
}

export default Nav
