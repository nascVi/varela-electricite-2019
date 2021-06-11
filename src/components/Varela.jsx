import React from 'react'
import {Fade} from 'react-reveal'

import varelaHero from './Hero/heroPic.png'
import varelaHero1 from './Hero/heroPic1.png'
import GoogleMap from "../components/map/map"
import Title from '../components/ui/Title'
import "../main.scss"
import logo from './logo/logo-black.png'

const Varela = () => {
    return (
        <div className="wrapper">
            <Fade Fade bottom delay={80} duration={900}>
                <div className="modalTitle">
                <Title className="vTitle" title="QUI SOMMES-NOUS?"/>
                </div>
            </Fade>
            <Fade Fade bottom delay={800} duration={900}>
                <img src={logo} alt="vlogo"/>
            </Fade>
                <br />

            <div className="varela-container">
                
                <Fade Fade left delay={1500} duration={900}>
                <div className="varela-hero-img">
                <br /><br />
                    <img src={varelaHero} width="100%" alt="hero varela"/>
                </div>
                </Fade>
                <Fade Fade right delay={2000} duration={900}>
                <div className="vrtext">

                    <h5 className="modalTitle"><strong><u>VARELA</u></strong></h5>
                    <p>
                        Une entreprise dédiée dans l’installation générale électrique du bâtiment.
                    </p>    
                    <p>
                        Implanté dans le département de la Seine et Marne, dans la ville de Roissy en Brie, VARELA
                        vous propose des prestations de travaux d’électricité de qualité et s’engage dans le suivi de
                        votre projet.
                    </p>
                    <p>
                        La conception et la réalisation de nos services sont toujours assurées et validés par la
                        consultation de notre bureau d’étude avec pour but principal le respect de la norme NFC-15-
                        100.
                    </p>
                    <p>
                        Toujours à l’écoute du client, nous apportons conseil et accompagnement durant l’ensemble
                        du chantier.
                    </p>
                </div>
                </Fade>
                <Fade Fade right delay={3000} duration={900}>
                <div className="vrtext1">

                    <h5 className="modalTitle"><strong><u>LA MAITRISE DE L'INSTALLATION ELECTRIQUE</u></strong></h5>
                    
                    <p>Monsieur VARELA Jackson à exercer le métier d’électricien du bâtiment en Ile de France
                        durant plus de 10 ans au sein d’entreprise général du bâtiment de renom, aujourd’hui il est
                        le Fondateur et le Gérant de la société VARELA créée en 2013.
                    </p>
                    <p>
                        Chaque projet est unique et exprime un réel investissement.
                    </p>
                    <p>
                        Fort de son expérience dans ce domaine, Monsieur VARELA a su développer sa passion et en
                        faire son activité et compte aujourd’hui plusieurs salariés.
                    </p>
                    <br/>
                </div>
                </Fade>
                <Fade Fade left delay={3500} duration={900}>
                <div className="varela-hero1-img">
                    <img src={varelaHero1} width="100%" alt="hero varela"/>
                </div>
                </Fade>
                

                </div>
                <Fade>
                    <div className="varela-map">
                    <h5 className="modalTitle1"><strong><u>OU NOUS TROUVER</u></strong></h5>
                    <GoogleMap />
                    </div>
                <div className="vrtext2">
                    <br />
                    <br />
                    <br />
                    <Fade Fade bottom delay={1000} duration={900}>
                    <h5 className="modalTitle"><strong><u>NOUS CONTACTER</u></strong></h5>
                    <p>Pour toute questions n’hésitez par à nous écrire par mail: <a href="mailto:contact@varela-electricite.com">contact@varela-electricite.com .</a></p>
                    </Fade>
                    <br /><br /><br />

                </div>
                </Fade>
        </div>
    )
}

export default Varela
