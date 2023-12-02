import "./header.css";
import React from "react";

function Header() {
  return (
    <nav>
      <div className="header-item-container">
      <div className="header-marquee"><marquee>&#127918;&nbsp;<span>Level Up Gaming is now available at your service!</span>&nbsp;&#127918;</marquee></div>
      <div className="header-items">
        <ul class="menu">
          <li><a href="#main">Home</a></li>
          {/* <li><a href="#services">Services</a></li> */}
          <li><a href="#contact">Contact</a></li>
        </ul>
        </div>
      </div>
      </nav>
  );
}

export default Header;
