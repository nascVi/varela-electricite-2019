import React from 'react'
import Realisation from '../Realisation'
import { realisations } from '../../data/realisations'
import { Fade } from 'react-reveal'

const Landing = () => {
    const notYetRea = realisations.filter(realisation => realisation.id === 1)[0];
    return (
        <div className="landing">
            <div className="wrapper">
                <Realisation {...notYetRea} />
                <div className="landing__video-container">
                    <h1>Produit souvent recommandé</h1>
                    <img src="/img/Player.jpg" alt="vidéo produit de gamme" className="landing__video" />
                </div>
                <Fade></Fade>
            </div>
        </div>
    )
}

export default Landing
