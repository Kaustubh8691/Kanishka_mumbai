import React from "react";

const AboutMail = () => {
  return (
    <div className="about-mail-conntainer">
      <input type="text" placeholder="Enter your Name" />
      <input type="email" placeholder="Enter a valid email address" />
      <textarea cols={3}></textarea>
      <button id="email-submit">SUBMIT</button>
    </div>
  );
};

export default AboutMail;
