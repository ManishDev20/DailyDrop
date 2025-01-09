import React from "react";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import CateBanner from "../Components/CateBanner";
import Products from "../Components/Products";
import AppDownload from "../Components/AppDownload";
import ComingSoon from "../Components/ComingSoon";
const Home = () => {
  return (
    <div className="w-full h-max  relative  px-1">
      <Navbar />
      <Hero />
      <CateBanner />
      <Products />
      <AppDownload />
      <ComingSoon />
    </div>
  );
};

export default Home;
