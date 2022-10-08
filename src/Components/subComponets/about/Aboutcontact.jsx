import React from "react";
import { TiTick } from "react-icons/ti";
const Aboutcontact = () => {
  return (
    <div className="about-middle-container">
      <div className="middle-contact">
        <div className="middle-title">call us</div>
        <div className="middle-text">1 (234) 567-891</div>
        <div className="middle-text">1 (234) 987-654</div>
      </div>
      <div className="middle-contact">
        <div className="middle-title">location</div>
        <div className="middle-text">
          121 Rock Street, 21 Avenur, New York, NY 92103-9000
        </div>
      </div>
      <div className="middle-contact">
        <div className="middle-title">Our top services</div>
        <div className="middle-text">
          <TiTick />
          Loacl transfers
        </div>
        <div className="middle-text">
          <TiTick />
          Airport Transfer
        </div>
        <div className="middle-text">
          <TiTick />
          Excursion and Tours
        </div>
      </div>
    </div>
  );
};

export default Aboutcontact;
