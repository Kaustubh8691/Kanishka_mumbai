import React from "react";
import img1 from "../../../images/chat1.jpg";
import img2 from "../../../images/chat2.jpg";
import img3 from "../../../images/chat3.webp";
import "./feature.css";

const Featurecards = () => {
  const data = [
    "Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id",
    "Nunc consequat interdum varius sit amet mattis vulputate enim nulla Risus feugiat.",
    "Nisl purus in mollis punc sed id semper. Rhoncus aekan vel elit scelerisque mauris.",
  ];

  return (
    <div className="features-cards">
      <div className="feature-card">
        <img className="featur-imgs" src={img1} alt="feature" />
        <div className="feature-card-title">Communuication</div>
        <div className="featur-description">{data[0]}</div>
        <button className="feature-more-btn">MORE</button>
      </div>
      <div className="feature-card">
        <img className="featur-imgs" src={img2} alt="feature" />
        <div className="feature-card-title">Inspired Design</div>
        <div className="featur-description">{data[1]}</div>
        <button className="feature-more-btn">MORE</button>
      </div>
      <div className="feature-card">
        <img className="featur-imgs" src={img3} alt="feature" />
        <div className="feature-card-title">Happy Customers</div>
        <div className="featur-description">{data[1]}</div>
        <button className="feature-more-btn">MORE</button>
      </div>
    </div>
  );
};

export default Featurecards;
