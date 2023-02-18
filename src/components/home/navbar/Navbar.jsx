import React from "react";
import "./navbar.css";
import mainlogo from "../../../assets/mainlogo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="header-image">
          <img src={mainlogo} alt="test" />
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
  );
};

export default Navbar;
