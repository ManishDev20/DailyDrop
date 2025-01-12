import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { FaShoppingBasket } from "react-icons/fa";
const WebBlocked = () => {
  const vegetableImages = [
    "/img/potato.webp",
    "/img/coriander.webp",
    "/img/coriander.webp",
  ];
  //   For desktop
  const heroDesktopWidth = 1200; // Adjust this according to your container size
  const heroDesktopHeight = 800; // Adjust this according to your container size

  //   for mobile
  const heroMobileWidth = 500; // Adjust this according to your container size
  const heroMobileHeight = 400;

  const randomPositionWithinHeroDesktop = () => ({
    x: Math.random() * (heroDesktopWidth - 30), // Ensure it stays within the width of the hero
    y: Math.random() * (heroDesktopHeight - 30), // Ensure it stays within the height of the hero
  });

  const randomPositionWithinHeroMobile = () => ({
    x: Math.random() * (heroMobileWidth - 30), // Ensure it stays within the width of the hero
    y: Math.random() * (heroMobileHeight - 30), // Ensure it stays within the height of the hero
  });
  return (
    <div className="border-2 overflow-hidden">
      <div className="w-full h-screen relative border-2">
        <h1 className="text-4xl font-bold text-center my-10">ERROR 404</h1>
        <h3 className="text-xl sm:text-3xl semibold text-center font-semibold my-10">
          This web page is blocked by Developer.
        </h3>
        <div className="w-full flex justify-center">
          <img src="./img/tomatocrying.gif" alt="" className="w-40 " />
        </div>

        <div className="contact-us flex justify-center">
          <a
            href="https://wa.me/7357723361"
            className="px-4 py-2 text-lg sm:tex-xl bg-green-700 hover:bg-green-800 rounded-xl my-10 text-white "
          >
            Admin Can Contact Us
          </a>
        </div>
        <div className="text-lg text-center">
          We are working on something amazing, Stay Tuned!
        </div>
        {/* Animated Coriander leafs in Desktop*/}
        <div className="absolute inset-0 z-0 pointer-events-none border-2">
          {vegetableImages.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`vegetable-${index}`}
              className="absolute w-32 h-32 opacity-40 object-contain"
              initial={randomPositionWithinHeroDesktop()} // Start at a random position inside the hero section
              animate={randomPositionWithinHeroDesktop()} // Move to another random position
              transition={{
                duration: 5 + Math.random() * 3, // Random duration for variation
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Animated Coriander leafs in Moblie*/}

        <div className="absolute inset-0 z-0 pointer-events-none border-2">
          {vegetableImages.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`vegetable-${index}`}
              className="absolute w-32 h-32 opacity-40 object-contain"
              initial={randomPositionWithinHeroMobile()} // Start at a random position inside the hero section
              animate={randomPositionWithinHeroMobile()} // Move to another random position
              transition={{
                duration: 5 + Math.random() * 3, // Random duration for variation
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebBlocked;
