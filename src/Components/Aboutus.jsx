import React from "react";
import AboutBot from "./subComponets/about/AboutBot";
import Abouttop from "./subComponets/about/Abouttop";
import DownloadTab from "./subComponets/about/DownloadTab";
const Aboutus = () => {
  return (
    <div className="about-container">
      <Abouttop />
      <DownloadTab />
      <AboutBot />
    </div>
  );
};

export default Aboutus;
