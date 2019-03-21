import React, {/* useState */} from 'react'
import FadeInLogo from '../../components/HeroH/FadeinLogo'

const Hero = () => {
  
 // Afficher logo avec effet de fondu à ouverture
  return (
    <div>
		<h1>I am the hero here!</h1>
		<FadeInLogo />
    </div>
  )
}

export default Hero
