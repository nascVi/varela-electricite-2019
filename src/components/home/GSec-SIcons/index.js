import React from 'react'
import Fade from 'react-reveal/Fade'

import ActiveSIconWindow from "./ActiveSIconWindow";

const SIconsGallery = ({ id, sUrl, title, info, budjet, iconlist }) => {

  const renderSIcons = () => {
    return iconlist.map((icon, i) => {
        return <li key={i} className="siconsgallery__icon"><i></i> <span>{icon}</span></li>
    })
  }

  return (
    <div style={sIconGalleryStyles}>
      {/* Left Side */}
      <div style={{ flex: 3 }}>
      <Fade top delay={id * 50} duration={400}>
        <ActiveSIconWindow className="siconsgallery__info">
        <div className="siconsgallery__display">
          {renderSIcons()}
          <div>
            
          </div>
        </ActiveSIconWindow>
        </div>
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

export default SIconsGallery