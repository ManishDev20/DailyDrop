import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const AppDownload = () => {
  return (
    <section className="py-10 sm:py-20 bg-primary-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 my-5 ">
              <img
                src="./img/DailydropLogo.webp"
                alt=""
                className="w-[80px] h-[80px] rounded-xl"
              />
              <h1 className="secHead text-4xl sm:text-5xl font-extrabold my-5 text-green-800">
                DAILY DROP
              </h1>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Shop Smarter with Our App
            </h2>
            <p className="text-gray-600 mb-8">
              Download our mobile app for a seamless shopping experience. Enjoy
              exclusive app-only offers, and faster checkout.
            </p>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Why Use Our App?</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  Daily exclusive deals and discounts
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  Quick reorder from previous purchases
                </li>

                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  Personalized recommendations
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#_"
                className="flex items-center justify-center w-48 text-white bg-black rounded-lg h-14"
              >
                <div className="mr-3">
                  <svg viewBox="30 336.7 120.9 129.2" width="30">
                    <path
                      fill="#FFD400"
                      d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                    ></path>
                    <path
                      fill="#FF3333"
                      d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                    ></path>
                    <path
                      fill="#48FF48"
                      d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                    ></path>
                    <path
                      fill="#3BCCFF"
                      d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="-mt-1 font-sans text-xl font-semibold">
                    Google Play
                  </div>
                </div>
              </a>
              <a
                href="#_"
                className="flex items-center justify-center w-48 text-white bg-black h-14 rounded-xl"
              >
                <div className="mr-3">
                  <svg viewBox="0 0 384 512" width="30">
                    <path
                      fill="currentColor"
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="-mt-1 font-sans text-xl font-semibold">
                    App Store
                  </div>
                </div>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto h-[400px] sm:h-[initial] px-4  flex justify-center">
              <img src="./img/app1.png" alt="" className="  object-contain " />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
