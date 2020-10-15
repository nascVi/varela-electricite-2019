import React from 'react'
import {Fade} from 'react-reveal'
// import Sicon from './SIcon'
// import { services } from '../../../data/services'


// Function to display 1 service at a time in the main frame

const ActiveSIconWindow = ({ activeService }) => {

    return (
        <div style={styles}>
                <Fade delay={activeService.id}>
                    <div className="service__item">
                        <img src={activeService.sUrl} alt="sIcon" height="150" width="150" className="sIcon__img" />                        
                    </div>
                </Fade>
            )
        </div>
    )
}

const styles = {
    height: '5%',
    width: '1%',
    background: '#333',
    opacity: '0.8'
}

export default ActiveSIconWindow