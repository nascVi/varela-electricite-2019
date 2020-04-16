import React from 'react'
import Realisation from '../Realisation'
import { realisations } from '../../data/Realisations'
import { Fade } from 'react-reveal'

const Landing = () => {
    const notYetRea = realisation.filter(realisation => realisation.id === 1)[0];
    return (
        <div className="landing">
            <div className="wrapper">
                <Realisation {...notYetRea} />
                <Fade></Fade>
            </div>
        </div>
    )
}

export default Landing
