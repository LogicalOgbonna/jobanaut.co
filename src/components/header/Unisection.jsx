import React from "react";

import "./unisection.css";

export const Unisection = ({showGetBtn, showBtn, title, image, addbg, desc }) => {
  console.log(desc);

  return (
    <div className={`hero-comp ${addbg ? "bg-sections" : ""}`}>
      <div className="left-side">
        <h3>
          {title}
          <span>{desc}</span>
        </h3>
        {showBtn && (
          <div className="hero-button">
            <button className="get-started btn-fonts">Get Started</button>
            <button className="contact-us btn-fonts">Contact Us</button>
          </div>
        )}
         
      </div>
      <div className="right-side">
        <img className="side-img" src={image}></img>
      </div>
    </div>
  );
};
