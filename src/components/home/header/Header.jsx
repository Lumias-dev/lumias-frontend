import React from "react";
import "./header.css";
import defi_planet from "../../../assets/defi_planet.svg";
import gamefi_planet from "../../../assets/gamefi_planet.svg";
import galaxydust from "../../../assets/galaxydust.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-image">
        <img
          src={gamefi_planet}
          height="1000"
          width="1000"
          className="gamefi-planet"
        />
        <img
          src={defi_planet}
          height="800"
          width="800"
          className="defi-planet"
        />
      </div>
    </div>
  );
};

export default Header;
