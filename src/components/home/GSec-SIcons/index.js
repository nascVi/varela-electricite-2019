/* Inspired by the fabulous'
  https://github.com/DZuz14/react-hooks-gallery
  ıı &&
  https://www.codementor.io/@christiannwamba/build-a-react-image-gallery-with-cloudinary-xh1cekno3#comments-xh1cekno3
*/

import React, { useState /*, useEffect */} from 'react'
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';

import ActiveSIconWindow from "./ActiveSIconWindow";
import SIconGrid from "./SIconGrid";

import axios from "axios";

const SIconsGallery = ({ id, title, sUrl, favoris, budjet, iconlist }) => {

  const renderSIcons = () => {
    return iconlist.map((icon, i) => {
        return <li key={i} className="GSecDisplay__icon"> <i></i> <span>{icon}</span></li>
    })
  }

  const [sicons, setSIcons] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)

  // useEffect(() => {
  // axios
  //   .get(
  //     'https://res.cloudinary.com/nascvi/image/services/services.json'
  //   )
  //   // choice to use a json local to be fee free
  //   .then(res => setSIcons(res.data.resources))
  //   console.log(res.data.resources)
  // }, [])

  return (
    <div style={sIconGalleryStyles}>
      {/* Left Side */}
      <div style={{ flex: 3 }}>
        <ActiveSIconWindow>
        {renderSIcons()}
        </ActiveSIconWindow>

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