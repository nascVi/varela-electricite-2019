import React, {/* useState */} from 'react'
import FadeInLogo from '../../components/HeroH/FadeinLogo'
/*import NavStrategButtons from '../../components/HeroH/NavStrategButtons'
import hBackground from '../../components/SVGs/shero/hBackground.svg'*/

const Hero = () => {
  
 // Afficher logo avec effet de fondu à ouverture
  return (
    <div className="hero">
     <h1>I am the hero here!</h1>
     <hBackground />
     <FadeInLogo />
     {/* Following section is using the onLoad 
method, displaying the function ready strategButtons
     the adrian way
     <NavStrategButtons />*/}
    </div>
  )
}

export default Hero
