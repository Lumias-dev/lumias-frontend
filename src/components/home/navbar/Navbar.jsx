import React from "react";
import "./navbar.css";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import mainlogo32x32 from "../../../assets/mainlogo32x32.png";

const Menu = () => (
  <>
    <a href="/">HOME</a>
    <a href="/news">NEWS</a>
    <a href="/docs">DOCS</a>
    <a href="/about">ABOUT US</a>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-image">
        <img src={mainlogo32x32} alt="mainlogo" />
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
          <div className="navbar-menu-container scale-up-center">
            <Menu />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
