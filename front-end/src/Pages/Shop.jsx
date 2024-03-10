import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Footer from "../Components/Footer/Footer";

const shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default shop;
