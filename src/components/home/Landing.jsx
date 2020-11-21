import React from 'react'
import Realisation from '../Realisation'
import { realisations } from '../../data/realisations'
import { Fade } from 'react-reveal'

import Wave from 'react-wavify'
// import anime from 'animejs/lib/anime.es.js'
// import { Link } from 'react-dom'

import { Video/*, CloudinaryContext, Transformation, Image*/} from 'cloudinary-react'

const Landing = () => {
    const notYetRea = realisations.filter(realisation => realisation.id === 2)[0];

    return (
        <div className="landing">
            <div className="wrapper">
            <Fade left duration={1200}>
            <div className="storyVid">
            <Wave className="wave-top"
                    fill='rgba(144, 242, 252, 0.97)'
                    paused={false}
                    options={{
                    height: 85,
                    amplitude: 40,
                    speed: 0.15,
                    points: 3
                    }}
                    />
            {/* <svg class="wave-top" width="100" viewBox="0 0 1200 250">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 108.306L50 114.323C100 120.34 200 132.374 300 168.476C400 
            204.578 500 264.749 600 246.698C700 228.647 800 132.374 900 108.306C1000 84.2382 1100 132.374 1150 156.442L1200 
            180.51V-8.5451e-06H1150C1100 -8.5451e-06 1000 -8.5451e-06 900 -8.5451e-06C800 -8.5451e-06 700 -8.5451e-06 600 
            -8.5451e-06C500 -8.5451e-06 400 -8.5451e-06 300 -8.5451e-06C200 -8.5451e-06 100 -8.5451e-06 50 
            -8.5451e-06H0V108.306Z" fill=""
            />
        </svg> */}
                <h1 className="vidTitle">La première visite est essentielle</h1>

                {/* <Link to="premiere-visite"> */}
                  <Video
                  className="vid"
                  cloudName="nascvi" 
                  publicId="demoFoot" 
                  width="100%" 
                  height="100%" 
                  loop={true}
                  autoPlay={true}
                  controls={true}
                  />
                {/* </Link> */}
                    {/* <Transformation width="0.4" angle="20" />
                    <Transformation overlay="cloudinary_icon" opacity="50" width="60" gravity="south_east" y="15" x="60" /> */}
                </div>
                </Fade>
                <div>

                <Realisation {...notYetRea} />
                </div>


                    <div className="landing__template-container">
                   <h1>PRESTATIONS POUR LA MODERNISATION DES SYSTEMES</h1>
                        <img className="landing__template" src="/img/linky-vieux-compteur.jpg" alt="vidéo produit de gamme" />
                    </div>

            </div>
        </div>
    )
}

export default Landing
