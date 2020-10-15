import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Fade from 'react-reveal/Fade'
import ActiveSIconWindow from "./ActiveSIconWindow";
import SIconGrid from './SIconGrid'


const Services = () => {
    const [ services, setServices ] = useState([])
    const [activeIndex, setActiveIndex ] = useState(0)

    useEffect (() => {
      axios
      .get(
        'https://gist.githubusercontent.com/nascVi/43d7d5abdaeaaa6ffa8bcba9e6e5ade3/raw/ffd31c3adf01ed4ce5f5d99cbea7b37c04394c28/services.json'
      ).then(res => setServices(res.data.services))
    }, [])

    
    const renderServices = () =>
    services.length[i] ? (
      <>
          <Fade top delay={activeIndex.id * 50} duration={400}>
            <ActiveSIconWindow activesService={services[activeIndex]} />
          </Fade>
      
          <SIconGrid services={services} onClick={handleClick}/>
        </>
      ) : null

      const renderSInfos = () =>
      services.length[i] ? (
        <>
        <span className="services__title">{services[activeIndex].title}</span>
          <p>
          {services[activeIndex].info}
          </p>
          <p>
            <div className="services__cout"><span>Installation Häger</span> €{services[activeIndex].cout.häger}</div>
            <div className="services__cout"><span>Linky</span> €{services[activeIndex].cout.enedis}</div>
            <div className="services__cout"><span>Domotique Legrand</span> €{services[activeIndex].cout.legrand}</div>       
          </p>
        {services[activeIndex].info}
        </>
      ) : null

    const handleClick = e => {
      const activeIndex = e.target.getAttribute('data-index')
      setActiveIndex(activeIndex)
    }

  return (
    <div className="service__plaquette" style={sIconGalleryStyles}>
      {/* Left Side */}
      <div style={{ flex: 3 }}>     
      {renderServices()}
      </div>
      {/* Right Side */}
      <div style={{ flex: 2 }}>
        <div className="services__info">
        {renderSInfos()} 
        </div>
      </div>
    </div>
    );
  }

const sIconGalleryStyles = {
  background: "#ddd",
  height: "500px",
  width: "100%",
  margin: "40px auto",
  display: "flex",
  opacity: "0.9",
}

export default Services
