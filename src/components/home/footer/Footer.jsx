import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        <ul>
          General
          <li>Home</li>
          <li>About Us</li>
        </ul>
        <ul>
          Information
          <li>Docs</li>
          <li>News</li>
          <li>FAQ</li>
        </ul>
        <ul>
          Legal
          <li>Privacy Policy</li>
          <li>Terms and conditions</li>
          <li>Refund policy</li>
          <li>Cookies</li>
        </ul>
        <br />
        <ul>
          Get in touch
          <li>Contact</li>
          <li>Email</li>
          <li>Discord help</li>
        </ul>
      </div>
      <div className="footer-end">
        <p>Lumias</p>
        <p>All rights reserved, Lumias 2023</p>
      </div>
      <div className="vr"></div>
      <div className="footer-newsletter">
        <h1>Newsletter!</h1>
        <p>
          Be the first one to enjoy our news, all the latest updates <br /> of
          our platforms and not miss any deals
        </p>
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Submit!</button>
      </div>
    </div>
  );
};

export default Footer;
