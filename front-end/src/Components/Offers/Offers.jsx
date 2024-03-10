import React from "react";
import "./Offers.css";
import offer_image from "../Assets/offer_1.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offer-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offer-right">
        <div className="offer1">
          <img src={offer_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Offers;
