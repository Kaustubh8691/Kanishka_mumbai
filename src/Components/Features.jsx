import React from "react";
import Featurecards from "./subComponets/feature/Featurecards";
import Featuretop from "./subComponets/feature/Featuretop";
const Features = () => {
  return (
    <div className="feature-container">
      <Featuretop />
      <Featurecards />
      <div className="feature-bott">
        Image From <a href="/#" style={{ textDecoration: "underline" }}>Freepik</a>
      </div>
    </div>
  );
};

export default Features;
