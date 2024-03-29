import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const Nav = props => {
    const { context, history } = props;
    const getClassName = pathname => (
       `main-nav__item ${history.location.pathname === pathname ? 'active' : ''}`
   )

    return (
        <div className={`main-nav main-nav--${context}`}>
            <NavLink className={getClassName('/')} exact to="/">Accueil</NavLink>
            {/* <NavLink className={getClassName('/')} exact to="/ics" /> */}
            <NavLink className={getClassName('/varela')} to="/varela">Varela</NavLink>
            <NavLink className={getClassName('/folio')} exact to="/activite|folio">Activité | Folio</NavLink>
            <NavLink className={getClassName('/contact')} exact to="/contact">Contact</NavLink>
            <NavLink className={getClassName('/cloud')} exact to="/activité"></NavLink>
        </div>
    )
}


export default withRouter(Nav)
