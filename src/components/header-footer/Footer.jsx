import React from 'react'

import Carousel from './Carousel'

// import Info from './Info'
import Socials from '../ui/Socials'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="wrapper wrapper--footer">
            <div className="footer__logos">
                
            <div className="flogo">
            </div>
                    {/*<div className="pro-ref-logo"></div> */}

                    <br></br>
            </div>
                        
                <br />
            </div>
            <div className="footer__partners">                 
                <h3>NOS PARTENAIRES</h3>
                <Carousel />
            </div>
            <div className="footer__social">
                <h3>RESEAUX SOCIAUX</h3>
                <Socials />
            </div>
            <div className="footer__copy">
                <div>
                    ©2022 Varela Electricité - lpChamps` make
                </div>
            </div>
        </footer>
    )
}

export default Footer
