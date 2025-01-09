import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBasketShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const [totalProducts, setTotalProducts] = useState(0);

  // Derived state for `isCart`
  const isCart = totalProducts > 0;

  const incrementCart = () => {
    setTotalProducts((prev) => prev + 1);
  };

  const decrementCart = () => {
    setTotalProducts((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const [isFav, setIsFav] = useState(false);

  const toggleFav = () => {
    setIsFav(!isFav);
  };

  return (
    <div className="flex flex-col h-full bg-[#d0e8e4] rounded-lg shadow-md overflow-hidden relative">
      <div className="absolute top-0 right-0 rounded-bl-xl bg-green-800 text-white px-2 py-1">
        {(((product.MRP - product.price) * 100) / product.MRP).toFixed(0)}% off
      </div>
      {/* Image Section */}
      <div className="aspect-w-1 aspect-h-1 p-5 flex items-center justify-center relative overflow-hidden ">
        <img
          src={product.image}
          alt={product.name}
          className="w-[200px] sm:w-[300px] sm:h-[200px] object-contain transition-transform hover:scale-[1.2]"
        />
      </div>

      {/* Content Section */}
      <div className="w-full h-max px-4 pt-2 sm:pt-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold mb-2 text-green-800">
            {product.name}
          </h3>
          <button
            onClick={toggleFav}
            title="add to favorite"
            className={`Fav text-lg sm:text-xl ${
              isFav ? "text-[#226819] " : "text-white"
            }`}
          >
            <FaHeart />
          </button>
        </div>
        <div className="text-gray-500 font-semibold line-through text-sm leading-[30px]">
          MRP: {product.MRP}
        </div>
        <div className="w-full h-max flex items-center justify-between ">
          <span className="text-xl text-green-700 font-bold text-primary-600">
            ₹{product.price}
          </span>
          <span className=" text-green-800 bg-green-300 px-3 py-1 rounded-lg  text-primary-600">
            {product.weight}
          </span>
        </div>
        <motion.button className="w-full bg-primary-600 text-white py-3 rounded-full hover:bg-primary-700 transition">
          {isCart ? (
            <div className="w-max mx-auto flex px-4 bg-green-800 rounded-xl py-2 text-white items-center">
              <button
                onClick={decrementCart}
                className="border-2 text-lg w-full rounded-xl  px-3"
              >
                -
              </button>
              <span className="mx-5 text-lg tracking-[2px]">
                {totalProducts}
              </span>
              <button
                onClick={incrementCart}
                className="border-2 text-lg w-full rounded-xl  px-3"
              >
                +
              </button>
            </div>
          ) : (
            <div
              onClick={incrementCart}
              className="w-full flex justify-center p-2 bg-green-800 rounded-xl"
            >
              Add To Cart
            </div>
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default ProductCard;
