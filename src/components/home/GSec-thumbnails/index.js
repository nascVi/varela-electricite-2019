import React, { Component } from "react";
import ActiveThumbnailWindow from "./active-thumbnail-window";
import ThumbnailGrid from "./sicon-grid";

export default class ThumbnailGallery extends Component {
  render() {
    return (
      <div style={thumbnailGalleryStyles}>
        {/* Left Side */}
        <div style={{ flex: 1 }}>
          <ActiveThumbnailWindow />
          <ThumbnailGrid />
        </div>

        {/* Right Side */}
        <div style={{ flex: 1 }}>Right</div>
      </div>
    );
  }
}

const thumbnailGalleryStyles = {
  background: "#ddd",
  height: "500px",
  width: "1024px",
  margin: "40px auto",
  display: "flex",
  opacity: "0.9",
};
