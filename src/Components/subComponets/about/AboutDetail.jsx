import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import vk from "../../../images/vk.png";
const AboutDetail = () => {
  return (
    <div className="left-side">
      <div className="abou-bot-title">Get in touch</div>
      <div className="abou-bot-detail">
        We can ensure reliability, low cost fares and most important, with
        safety and comfort in mind.
      </div>
      <div className="abou-bot-desc">
        Etiam sit amet convallis erat - Class aptent taciti sociosqu ad litora
        torquent per conubia! Maecenas gravida lacus Lorem etiam sit amet
        convallis erat.
      </div>
      <div className="abou-bot-logos">
        <BsFacebook style={{ height: "4vh", width: "3vw", color: "#498d7e" }} />
        <AiFillTwitterCircle
          style={{ height: "4vh", width: "3vw", color: "#498d7e" }}
        />
        <FaInstagramSquare
          style={{ height: "4vh", width: "3vw", color: "#498d7e" }}
        />
        <img id="logo-about-vk" src={vk} alt="vk" />
        <AiOutlineYoutube
          style={{
            height: "4vh",
            width: "3vw",
            color: "#498d7e",
            borderRadius: "18px",
            // color: "white",
            backgroundColor: "#498d7e",
          }}
        />
      </div>
    </div>
  );
};

export default AboutDetail;
