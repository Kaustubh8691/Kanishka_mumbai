import React from "react";
import "./designcard.css";
const Designcard = () => {
  return (
    <>
      <div className="design-cards card-left">
        <div className="design-card-head left-texti">App Design</div>
        <div className="design-card-title">
          Check our latest blog post for more update.
        </div>
        <a href="/#" className="design-more left-texti">
          Learn more ---<div className="arrow-right1"></div>{" "}
        </a>
      </div>
      <div className="design-cards card-right">
        <div className="design-card-head right-texti">App Design</div>
        <div className="design-card-title">
          Check our latest blog post for more update.
        </div>
        <a href="/#" className="design-more right-texti">
          Learn more ---<div className="arrow-right2"></div>{" "}
        </a>
      </div>
    </>
  );
};

export default Designcard;
