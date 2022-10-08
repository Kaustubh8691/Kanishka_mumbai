import React from "react";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import profile from "../../../images/profile.webp";
import left from "../../../images/quote.png";
import "./abouttop.css";

const Abouttop = () => {
  return (
    <div className="about-top">
      <div className="about-left">
        <div className="about-title">About Us</div>
        <div className="about-descri">
          <p className="about-descrip1">
            Sample text. Click to Egestas egestas fringilla phasellus faucibus
            scelerisque eleifend donec pretium vulputate. Pharetra magna ac
            placerat vestibulum. Quam lacus suspendisse faucibus interdum
            posuere lorem. Egestas tellus rutrum tellus pellentesque eu
            tincidunt. Neque vitae tempus quam pellentesque nec. Vel elit
            scelerisque mauris pellentesque pulvinar pellentesque habitant
            morbi. Interdum velit euismod in pellentesque massa placerat duis
          </p>
          <p className="about-descrip1">
            Quis viverra nibh cras pulvinar mattis: Ornare arcu dui vivamus arcu
            felis bibendum ut tristique. Pellentesque eu tincidunt tortor
            aliquam nulla facilisi cras fermenturn odio Dignissim diam quis enim
            lobortis scelerisque Tellus molestie nunc non blandit mässa enim the
            text box Click again or double click to start editing the text
          </p>
          <div className="about-descrip1">
            image from <a href="/#">Freepik</a>
          </div>
        </div>
      </div>
      <div className="about-right">
        <img id="quat" src={left} alt="left" />
        <img id="profileimg" src={profile} alt="profile" />
        <div className="profile-details">
          I help companies tincidunt tortor aliquam nulla facilisi cras
          fermentum odio.
        </div>
        <button className="about-profile-btn">
          <TiSocialLinkedinCircular
            style={{ height: "4vh", borderRadius: "39px", width: "4vh" }}
          />
          <div id="linkedinses">Find me on Linkedin</div>{" "}
        </button>
      </div>
    </div>
  );
};

export default Abouttop;
