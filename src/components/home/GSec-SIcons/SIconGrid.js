import React from "react";
import SIcon from "./SIcon";

const SIconGrid = ({ services, onClick }) => {
  return (
    <div style={styles}>
      
    {services.map((service, i) => (
      <SIcon 
        key={service.sUrl}
        sUrl={service.sUrl}
        index={i}
        onClick={onClick}     
      />
    ))}
    </div>
  );
};

const styles = {
  height: "35%",
  width: "100%",
  background: "#333",
  opacity: "0.8",
  display: "flex",
  flex: "wrap",
};

export default SIconGrid;
