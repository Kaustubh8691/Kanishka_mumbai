import React from "react";
import { AiFillApple } from "react-icons/ai";
import { AiFillAndroid } from "react-icons/ai";
import "./download.css";

const DownloadTab = () => {
  return (
    <div className="downloadtab">
      <div id="download-title">Download it now</div>
      <div className="download-btn">
        <button className="download-btn">
          <AiFillApple /> App Store
        </button>
        <button className="download-btn">
          <AiFillAndroid />
          Google Play
        </button>
      </div>
      <div className="download-desc">
        Add some helper text here to explain the finer details of your product
        of service.
      </div>
    </div>
  );
};

export default DownloadTab;
