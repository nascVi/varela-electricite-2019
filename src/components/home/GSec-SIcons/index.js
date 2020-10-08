import React from 'react'
import Fade from 'react-reveal/Fade'

import ActiveSIconWindow from "./ActiveSIconWindow";

const Service = ({ id, sUrl, title, info, cout, iconlist }) => {

  const renderSIcons = () => {
    return iconlist.map((icon, i) => {
        return <li key={i} className="services__icon"><i></i> <span>{icon}</span></li>
    })
  }

  return (
    <div className="services" style={sIconGalleryStyles}>
      {/* Left Side */}
      <div style={{ flex: 3 }}>
      <Fade top delay={id * 50} duration={400}>
        <ActiveSIconWindow className="services__info">
          <div className="services__display">
            <img src={sUrl} alt="Services Icons" />
             {renderSIcons()}
            <span className="services__title">{title}</span>
          </div>
          <p className="servicesy__info">
          {info}
          </p>
          <p>
            <div className="services__cout"><span>Installation Häger</span> €{cout.häger}</div>
            <div className="services__cout"><span>Linky</span> €{cout.enedis}</div>
            <div className="services__cout"><span>Domotique Legrand</span> €{cout.legrand}</div>
          </p>
          
        </ActiveSIconWindow>
      </Fade>
      </div>

      {/* Right Side */}
      <div style={{ flex: 2 }}>Right</div>
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
