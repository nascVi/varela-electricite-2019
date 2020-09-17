import React from "react";
import { Image } from "cloudinary-react";

const SIcon = () => {
  return (
    <div style={styles}>
      <Image
        loading="lazy"
        className="ser1"
        cloudName="nascvi"
        publicId="icons/depannage.png"
        width="125"
        crop="scale"
      />
      {/* A votre service 5/7 heures ouvrés */}
      <Image
        loading="lazy"
        className="ser1"
        cloudName="nascvi"
        publicId="icons/renovation.png"
        width="125"
        crop="scale"
      />
      {/* Etre à l'écoute de nos clients est primordiale. */}
      <Image
        loading="lazy"
        className="ser1"
        cloudName="nascvi"
        publicId="icons/borne.png"
        width="125"
        crop="scale"
      />
      {/* Un projet de recharge électrique? */}
      <Image
        loading="lazy"
        className="ser1"
        cloudName="nascvi"
        publicId="icons/domotique.png"
        width="125"
        crop="scale"
      />
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
