import React from 'react'
import Fade from 'react-reveal/Fade'

import ActiveSIconWindow from "./ActiveSIconWindow";

const Service = ({ id, title, info, cout }) => {
  
  // const renderSIcons = () => {
  //     return iconlist.map((icon, i) => {
  //           return <li key={i} className="services__icon"><i></i> <span>{icon}</span></li>
  //       })
  //     }
      
      return (
        <div className="service__plaquette" style={sIconGalleryStyles}>
      <Fade top delay={id * 50} duration={400}>
        <ActiveSIconWindow />
      </Fade>
      {/* Left Side */}
      <div style={{ flex: 3 }}>     
      </div>

      {/* Right Side */}
      <div style={{ flex: 2 }}>
      <div className="services__info">
            <span className="services__title">{title}</span>
          <p>
          {info}
          </p>
          <p>
            <div className="services__cout"><span>Installation Häger</span> €{cout.häger}</div>
            <div className="services__cout"><span>Linky</span> €{cout.enedis}</div>
            <div className="services__cout"><span>Domotique Legrand</span> €{cout.legrand}</div>
             
          </p>
        {info}
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

export default Service
