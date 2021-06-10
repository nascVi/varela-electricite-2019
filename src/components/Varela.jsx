import React from 'react'
// import { varela } from '../data/varela'
import {Fade} from 'react-reveal'

// import ShoesoneNine from '../components/shoesone'
import varelaHero from './Hero/heroPic.png'
// import GoogleMap from "../components/map/map"
import Title from '../components/ui/Title'

const Varela = () => {
    return (
        <div className="wrapper">
            <Fade Fade bottom delay={80} duration={900}>
                <Title title="QUI SOMMES-NOUS?"/>
                <br />                
                <br />
                {/* <ShoesoneNine /> */}
                <div className="varela-hero-img">
                <br /><br />
                    <img src={varelaHero} width="100%" alt="hero varela"/>
                </div>
                <div className="qui">
                    <br />                
                    <br />
                    <h5><strong><u>VARELA</u></strong></h5>
                    <br />
                    <h5>
                        Une entreprise dédiée dans l’installation générale électrique du bâtiment.
                        Implanté dans le département de la Seine et Marne, dans la ville de Roissy en Brie, VARELA
                        vous propose des prestations de travaux d’électricité de qualité et s’engage dans le suivi de
                        votre projet.
                        La conception et la réalisation de nos services sont toujours assurées et validés par la
                        consultation de notre bureau d’étude avec pour but principal le respect de la norme NFC-15-
                        100.
                        Toujours à l’écoute du client, nous apportons conseil et accompagnement durant l’ensemble
                        du chantier.
                    </h5>
                    <br/>
                    <h5><strong><u>LA MAITRISE DE L'INSTALLATION ELECTRIQUE</u></strong></h5>
                    
                    <h5>Monsieur VARELA Jackson à exercer le métier d’électricien du bâtiment en Ile de France
                        durant plus de 10 ans au sein d’entreprise général du bâtiment de renom, aujourd’hui il est
                        le Fondateur et le Gérant de la société VARELA créée en 2013.
                        Chaque projet est unique et exprime un réel investissement.
                        Fort de son expérience dans ce domaine, Monsieur VARELA a su développer sa passion et en
                        faire son activité et compte aujourd’hui plusieurs salariés.
                    </h5>
                    <br/>
                    <h5><strong><u>NOUS CONTACTER</u></strong></h5>
                    <h5>Pour toute questions n’hésitez par à nous écrire par mail: <a href="mailto:contact@varela-electricite.com">contact@varela-electricite.com .</a></h5>
                    <br /><br /><br />
                    {/* <GoogleMap /> */}

                    <br />
                    <br />
                    <br />
                </div>
            </Fade>
            
        </div>
    )
}

export default Varela
