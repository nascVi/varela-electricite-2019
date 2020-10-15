import React from "react";
import { Image } from "cloudinary-react";

const SIcon = ({ sUrl, index, onClick }) => {
  return (
    <div style={styles}>
      <Image src={sUrl} data-index={index} onClick={onClick} />
      {/* Notre développement domotique est eco impliqué depuis 2013. */}
    </div>
  );
};

const styles = {
  height: "35%",
  width: "100%",
  background: "#333",
  opacity: "0.8",
};

export default SIcon;
