import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <div className="navbar-links">
          <div className="navbar-links-logo">
            <h1>LUMIAS</h1>
          </div>
          <div className="navbar-links-container">
            {/* create router */}
            <p>HOME</p>
            <p>ABOUT US</p>
            <p>DOCS</p>
            <p>NEWS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
