import React from "react";
import "./header.css";
import defi_planet from "../../../assets/defi_planet.svg";
import gamefi_planet from "../../../assets/gamefi_planet.svg";
import galaxydust from "../../../assets/galaxydust.svg";
import galaxydust2 from "../../../assets/galaxydust2.svg";
import ast from "../../../assets/ast.svg";
import aststring from "../../../assets/aststring.svg";

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
        <img src={aststring} className="aststring" />
        <img src={ast} className="ast" />
        <img src={galaxydust2} className="galaxydust2" />
      </div>
    </div>
  );
};

export default Header;
