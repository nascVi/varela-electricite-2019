import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="main-nav">
            <Link to="/varela">Notre entreprise</Link>
            <Link to="/actif">Actif</Link>
            <Link to="/gallery">Projet</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default Nav
