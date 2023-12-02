import "./header.css";
import React from "react";
import Marquee from "react-fast-marquee";
import logo from '../../Assets/images/logo.jpg'

function Header() {
  return (
    <nav>
      <div className="header-item-container">
      <div className="header-marquee"><Marquee>&#127918;&nbsp;<span>Level Up Gaming is now available at your service!</span>&nbsp;&#127918;</Marquee></div>
      <div className="header-items">
        <a href="#main">
        <img src={logo} alt="Logo"/></a>
        <ul class="menu" id="menu">
          <li><a href="#main">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
        </div>
      </div>
      </nav>
  );
}

export default Header;
