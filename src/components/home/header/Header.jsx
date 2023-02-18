import React from "react";
import "./header.css";
import mainlogo32x32 from "../../assets/mainlogo32x32.png";

const Header = () => {
  return (
    <div>
      <div>
        <h1>Hi</h1>
      </div>
      <div className="header-image">
        <img src={mainlogo32x32} alt="mainlogo32x32" />
      </div>
    </div>
  );
};

export default Header;
