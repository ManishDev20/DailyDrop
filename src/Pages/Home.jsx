import React from "react";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import CateBanner from "../Components/CateBanner";
import Products from "../Components/Products";
import AppDownload from "../Components/AppDownload";
import ComingSoon from "../Components/ComingSoon";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <div className="w-full h-max  relative  ">
      <Navbar />
      <Hero />
      <CateBanner />
      <Products />
      <AppDownload />
      <ComingSoon />
      <Footer />
    </div>
  );
};

export default Home;
