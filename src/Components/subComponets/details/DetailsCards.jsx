import React from "react";
import "./details.css";
import { IoMdClock } from "react-icons/io";
import growth1 from "../../../images/growth.png";
import planning from "../../../images/planning.png";
import plant from "../../../images/plant.webp";
import bussiness from "../../../images/growth1.webp";
import global from "../../../images/global.webp";

const DetailsCards = () => {
  const descrip =
    "Sample text Click to select the text box Click again or double click to start editing the text. Duis aute irure dolor in reprehendent in vuptate velit esse cillum dolore ea nulla pariatur";
  return (
    <div className="detils-card">
      <div className="cardss bgtext">
        <img className="details-logos" src={growth1} alt="growth" />
        <div className="card-title">Business Growth</div>
        <div className="card-description">{descrip}</div>
      </div>
      <div className="cardss bgtext text1">
        <img className="details-logos" src={planning} alt="planning" />
        <div className="card-title">Strategy Planning</div>
        <div className="card-description">{descrip}</div>
      </div>
      <div className="cardss bgtext text2">
        <IoMdClock style={{ height: "4em", color: "#2e9278", width: "4em" }} />
        <div className="card-title">Time is Money</div>
        <div className="card-description">{descrip}</div>
      </div>
      <div className="cardss bgtext text3">
        <img className="details-logos" src={plant} alt="growth" />
        <div className="card-title">Better Investment</div>
        <div className="card-description">{descrip}</div>
      </div>
      <div className="cardss bgtext text4">
        <img className="details-logos" src={bussiness} alt="growth" />
        <div className="card-title">Growth Graph</div>
        <div className="card-description">{descrip}</div>
      </div>
      <div className="cardss bgtext text5">
        <img className="details-logos" src={global} alt="growth" />
        <div className="card-title">Global Business</div>
        <div className="card-description">{descrip}</div>
      </div>
    </div>
  );
};

export default DetailsCards;
