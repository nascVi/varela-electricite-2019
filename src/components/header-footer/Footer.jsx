import React from 'react'
import Info from './Info'
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
                        <div className="footer__copy">
                            <div>
                                ©2021 Varela Electricité - lpChamps` make
                            </div>
                    
                    </div>
                </div>
                    <div className="footer_partners">
                        <p>Partners Logos massonery</p>
                    </div>
                        
                <br />
                <div className="footer__social">
                    
                        <h3>RESEAUX SOCIAUX</h3>
                        
                    <Socials />
                </div>
            </div>
        </footer>
    )
}

export default Footer
