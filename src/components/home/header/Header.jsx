import React from "react";
import "./header.css";
import defi_planet from "../../../assets/defi_planet.svg";
import gamefi_planet from "../../../assets/gamefi_planet.svg";
import bcgg from "../../../assets/bcgg.svg";
import mainbg from "../../../assets/mainbg.svg";
import Rectangle140 from "../../../assets/Rectangle140.svg";

const Header = () => {
  return (
    <div className="header">
      {/* <img src={bcgg} alt="background" /> */}
      <div className="header-image">
        <img src={defi_planet} alt="blue-planet" />
        <img src={gamefi_planet} alt="gamefi_planet" />
        {/* <img src={bcgg} alt="bcgg" /> */}
        {/* <img src={mainbg} alt="mainbg" /> */}
      </div>
    </div>
  );
};

export default Header;
