import React from "react";
import "./navbar.css";
import mainlogo32x32 from "../../../assets/mainlogo32x32.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <div className="navbar-links">
          <div className="header-image">
            <img src={mainlogo32x32} alt="mainlogo32x32" />
          </div>
          <div className="navbar-title">
            <h1>LUMIAS</h1>
          </div>
          <div className="navbar-links-container">
            {/* create router */}
            <p>HOME</p>
            <p>NEWS</p>
            <p>DOCS</p>
            <p>ABOUT US</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
