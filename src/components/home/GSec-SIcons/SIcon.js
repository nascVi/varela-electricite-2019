import React from "react";
import { Image } from "cloudinary-react";

const SIcon = () => {
  return (
    <div style={styles}>
      <Image
        loading="lazy"
        className="ser1"
        cloudName="nascvi"
        publicId="icons/depan.png"
        background="black"
        width="183"
        crop="scale"
      />
      {/* A votre service 5/7 heures ouvrés */}
      <Image
        loading="lazy"
        className="ser2"
        cloudName="nascvi"
        publicId="icons/reno.png"
        background="black"
        width="183"
        crop="scale"
      />
      {/* Etre à l'écoute de nos clients est primordiale. */}
      <Image
        loading="lazy"
        className="ser3"
        cloudName="nascvi"
        publicId="icons/bor.png"
        background="black"
        width="183"
        crop="scale"
      />
      {/* Un projet de recharge électrique? */}
      <Image
        loading="lazy"
        className="ser4"
        cloudName="nascvi"
        publicId="icons/domo.png"
        background="black"
        width="183"
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
