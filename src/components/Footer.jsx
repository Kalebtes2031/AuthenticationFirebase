import React from "react";
import wave from "../assets/wave.svg";

 const Footer = () => {
  return (
    <div
        width= "100%"
        zindex= "" // Ensure it's above other content if necessary
    >
      <div>
        <img
          src={wave}
          alt="wave"
          width="100%"
          display="block"
          height="195px"
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};
export default Footer;
