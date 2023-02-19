import React from "react";
import "./navbar.css";
import mainlogo from "../../../assets/mainlogo.png";
import mainlogo32x32 from "../../../assets/mainlogo32x32.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links-image">
          {/* <img src={mainlogo} alt="mainlogo" /> */}
          <img src={mainlogo32x32} alt="mainlogo" />
        </div>
        <div className="navbar-links-title">
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
  );
};

export default Navbar;
