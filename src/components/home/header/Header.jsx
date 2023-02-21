import React from "react";
import "./header.css";
import defi_planet from "../../../assets/defi_planet.svg";
import gamefi_planet from "../../../assets/gamefi_planet.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-image">
        <img src={defi_planet} height="700" width="700" alt="blue-planet" />
        <img src={gamefi_planet} height="800" width="740" alt="gamefi_planet" />
        {/* <img src={defi_planet} alt="blue-planet" />
        <img src={gamefi_planet} alt="gamefi_planet" /> */}
      </div>
    </div>
  );
};

export default Header;
