import React from "react";
import { motion } from "framer-motion";

const ComingSoon = () => {
  return (
    <section className="py-16 bg-primary-50 bg-[#beedd291]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className=" text-3xl sm:text-5xl font-bold mb-6 text-green-800">
            Coming Soon
          </h2>
          <p className="text-xl mb-8">
            We're working on exciting new features to make your shopping
            experience even better!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="bg-white p-6 rounded-lg shadow-md bg-gradient-to-b  from-green-300 via-green-400 to-green-500 ">
              <img
                src="./img/invoice.png"
                alt=""
                className="w-32 mx-auto pb-5"
              />
              <h3 className="text-xl font-semibold mb-2">Recipe Integration</h3>
              <p className="">
                Get personalized recipes based on your purchases
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md bg-gradient-to-b  from-green-300 via-green-400 to-green-500 ">
              <img
                src="./img/vegetables.png"
                alt=""
                className="w-32 mx-auto pb-5"
              />
              <h3 className="text-xl font-semibold mb-2">Subscription Boxes</h3>
              <p className="">
                Weekly vegetable boxes tailored to your preferences
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md bg-gradient-to-b  from-green-300 via-green-400 to-green-500 ">
              <img
                src="./img/loyalty.png"
                alt=""
                className="w-40 mx-auto pb-5"
              />
              <h3 className="text-xl font-semibold mb-2">Loyalty Program</h3>
              <p className="">Earn points and get exclusive rewards</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComingSoon;
