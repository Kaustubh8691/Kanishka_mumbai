import React from "react";
import Intro1 from "./subComponets/intro/Intro1";
import Intro2 from "./subComponets/intro/Intro2";
import "./meadiaq.css";
const Intro = () => {
  return (
    <div className="Intro-container">
      <Intro1 />
      <Intro2 />
    </div>
  );
};

export default Intro;
