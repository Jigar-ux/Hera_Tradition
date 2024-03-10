import React from "react";
import "./Hero.css";
import Arrow from "../Assets/arrow.png";
import hero_image from "../Assets/hero1.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <p>🎉</p>
          </div>
          <p>collection</p>
          <p>of kurtis</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={Arrow} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
