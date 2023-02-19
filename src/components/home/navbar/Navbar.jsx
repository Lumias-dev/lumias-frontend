import React from "react";
import "./navbar.css";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import mainlogo32x32 from "../../../assets/mainlogo32x32.png";

const Menu = () => (
  <>
    {/* create router */}
    <p>HOME</p>
    <p>NEWS</p>
    <p>DOCS</p>
    <p>ABOUT US</p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links-image">
          {/* <img src={mainlogo} alt="mainlogo" /> */}
          <img src={mainlogo32x32} alt="mainlogo" />
        </div>
      </div>
      <div className="navbar-title">
        <h1>LUMIAS</h1>
      </div>
      <div className="navbar-container">
        <Menu />
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={23}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={23}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-links-menu-container scale-up-center">
            <Menu />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
