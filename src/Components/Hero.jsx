import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";

const Hero = () => {
  const vegetableImages = [
    "/img/mint.webp",
    "/img/coriander.webp",
    "/img/coriander.webp",
    "/img/coriander.webp",
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
    <section
      id="hero"
      className="w-full h-max py-10 bg-[#bcf4d9] overflow-hidden relative"
    >
      <div className="max-w-[1200px]  mx-auto h-full grid gap-5 grid-cols-12 relative z-10">
        {/* mobile hero image section  */}
        <div className="col-span-12 md:col-span-6 flex md:hidden w-full h-full relative z-10 pt-5 sm:pt-14  p-5  justify-center">
          <div className="cicrle relative w-max h-max overflow-hidden bg-white rounded-full">
            <img
              src="./img/deliveryBoy.png"
              alt=""
              className="w-[300px] sm:w-[400px] md:w-[500px] "
            />
          </div>
        </div>
        {/* Text Content */}

        <div className="col-span-12 md:col-span-6 w-full h-full px-10  sm:pt-10 md:pt-28 lg:pt-32 z-10 ">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-center sm:text-left">
              Get Fresh
              <span className="text-green-600 leading-[50px] md:leading-[60px]">
                {" "}
                Veggies
              </span>
              <br /> Same Day.
            </h1>
          </div>
          <div className="my-5 sm:my-10">
            <h3 className="text-lg text-center sm:text-left ">
              We deliver farm fresh Vegetables to your doorstep Everyday.
            </h3>
          </div>
          <div className="flex justify-center sm:justify-start">
            <Link
              to="/products"
              className="group text-white bg-gradient-to-r from-green-600 via-green-700 to-green-800 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2"
            >
              <FaShoppingBasket className="hidden group-hover:inline-flex text-xl mr-2" />
              Order Now
            </Link>
          </div>
        </div>

        {/* desktop hero image Section */}
        <div className="col-span-12 md:col-span-6 hidden md:flex w-full h-full relative z-10 pt-10 sm:pt-20 md:pt-24 lg:pt-10 p-5  justify-center">
          <div className="cicrle relative w-max h-max overflow-hidden bg-white rounded-full">
            <img
              src="./img/deliveryBoy.png"
              alt=""
              className="sm:w-[400px] md:w-[500px] "
            />
          </div>
        </div>
      </div>

      {/* Animated Coriander leafs in Desktop*/}
      <div className="absolute inset-0 z-0 pointer-events-none">
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

      <div className="absolute inset-0 z-0 pointer-events-none">
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
    </section>
  );
};

export default Hero;
