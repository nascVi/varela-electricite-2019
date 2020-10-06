/* Inspired by the fabulous'
  https://github.com/DZuz14/react-hooks-gallery
  ıı &&
  https://www.codementor.io/@christiannwamba/build-a-react-image-gallery-with-cloudinary-xh1cekno3#comments-xh1cekno3
*/

import React, { Component } from "react";
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';

import ActiveSIconWindow from "./ActiveSIconWindow";
import SIconGrid from "./SIconGrid";

import axios from "axios";

export default class SIconsGallery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gallery: []
    }
  }

  componentDidMount() {
  axios.get('http://res.cloudinary.com/nascvi/Sicons/borne.gif')
    .then(res => { 
      console.log(res.data.resources);
      this.setState({gallery: res.data.resouces})      
    })
  }

  render() {
    return (
      <div style={sIconGalleryStyles}>
        {/* Left Side */}
        <div style={{ flex: 3 }}>
          <ActiveSIconWindow />
          <SIconGrid />
        </div>

        {/* Right Side */}
        <div style={{ flex: 2 }}>Right</div>
      </div>
    );
  }
}

const sIconGalleryStyles = {
  background: "#ddd",
  height: "500px",
  width: "100%",
  margin: "40px auto",
  display: "flex",
  opacity: "0.9",
};
// ☸
