import React, { Component } from "react";
import ActiveSIconWindow from "./ActiveSIconWindow";
import SIconGrid from "./SIconGrid";

import Axios from "axios";

export default class SIconsGallery extends Component {
  render() {
    return (
      <div style={sIconGalleryStyles}>
        {/* Left Side */}
        <div style={{ flex: 1 }}>
          <ActiveSIconWindow />
          <SIconGrid />
        </div>

        {/* Right Side */}
        <div style={{ flex: 1 }}>Right</div>
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
