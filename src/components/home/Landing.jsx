import React from 'react'
import Realisation from '../Realisation'
import { realisations } from '../../data/realisations'
import { Fade } from 'react-reveal'

import { Video/*, CloudinaryContext, Transformation, Image*/} from 'cloudinary-react'

const Landing = () => {
    const notYetRea = realisations.filter(realisation => realisation.id === 1)[0];
    return (
        <div className="landing">

            <div className="wrapper">
            <div className="storyVid">
                <h1 className="vidTitle">La première visite est essentielle</h1>
                  <Video  
                  cloudName="nascvi" 
                  publicId="demoFoot" 
                  width="88%" 
                  height="88%" 
                  loop={true}
                  autoPlay={true}
                  controls={true} 
                  />
                    {/* <Transformation width="0.4" angle="20" />
                    <Transformation overlay="cloudinary_icon" opacity="50" width="60" gravity="south_east" y="15" x="60" /> */}
                </div>
                <div>

                <Realisation {...notYetRea} />
                </div>
                <Fade bottom duration={800}>


                    <div className="landing__video-container">
                        <h1>PRODUIT QUE NOUS INSTALLONS SOUVENT</h1>
                        <img className="landing__video" src="/img/linky-vieux-compteur.jpg" alt="vidéo produit de gamme" />
                    </div>

                </Fade>
            </div>
        </div>
    )
}

export default Landing
