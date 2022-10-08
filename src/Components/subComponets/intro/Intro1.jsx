import React from "react";
import "./intro.css";
import img1 from "../../../images/phone1.png";

const Intro1 = () => {
  return (
    <div className="intro1-container">
      <div className="intro1-left">
        <small id="intro-about">ABOUT US</small>
        <div className="intro-text">1000+ customer using Our application</div>
        <ul>
          <li>Powerful and flexible them</li>
          <li>Simple, transparent pricing</li>
          <li>Build tools and full documention</li>
        </ul>
        <button className="read-more">READ MORE</button>
      </div>
      <div className="intro1-right">
        <img id="mobile" src={img1} alt="mobile" />
      </div>
    </div>
  );
};

export default Intro1;
