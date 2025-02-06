import React from "react";
import Hero from "../Components/Home/Hero";
import Navbar from "../Components//Home/Navbar";
import CateBanner from "../Components/Home/CateBanner";
import Products from "../Components/Products/Products";
import AppDownload from "../Components/Home//AppDownload";
import ComingSoon from "../Components/Home/ComingSoon";
import Footer from "../Components/Home/Footer";
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
