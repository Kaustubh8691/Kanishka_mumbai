import React from "react";
import menu from "../images/menu.png";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-text">logo</div>
      <img id="more-header" src={menu} alt="more" />
    </div>
  );
};

export default Header;
