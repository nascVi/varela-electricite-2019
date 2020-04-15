import React from 'react'
import Contact from './Contact'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="wrapper wrapper--footer">
                <div className="footer__logos">
                    <div className="logo"></div>
                    <div className="pro-ref-logo"></div>
                    <div className="footer__copy">©2020 Varela Electricité - lpChamps` make</div>
                </div>
                <div className="footer__contact">
                    <h3>NOUS RENCONTRER</h3>
                    <Contact />
                </div>
                <div className="footer__social">
                    <h3>RESEAUX SOCIAUX</h3>
                </div>
            </div>
        </footer>
    )
}

export default Footer
