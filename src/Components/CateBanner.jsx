import React from "react";
import { Link } from "react-router-dom";

const CateBanner = () => {
  const categories = [
    {
      title: "Vegetables",
      img: "./img/vegetables.png",
      desc: "Green stuff, good stuff!",
    },
    {
      title: "Exotic Vegetables",
      img: "./img/exoticvegetables.png",
      desc: "Greens, gains, and glory!",
    },
    {
      title: "Vegetables Combo",
      img: "./img/vegetablecombo.png",
      desc: "Fresh Veggies, Fresh Start!",
    },
    {
      title: "Fruits",
      img: "./img/fruits.png",
      desc: "Fruitilicious, Fruitastic!",
    },
  ];
  return (
    <div className="py-2 sm:py-10">
      <div className="max-w-[1200px] mx-auto py-5 px-5 lg:px-10 grid grid-cols-12  gap-5 md:gap-10 ">
        {/* Category Cards*/}

        {categories.map((veg, i) => {
          return (
            <Link
              key={i}
              to={"/products"}
              className="cateCard col-span-12 sm:col-span-6 lg:col-span-3 p-4 flex flex-col text-center gap-5 items-center flex-1 bg-white rounded-md hover:scale-[1.1] duration-[0.6s] hover:shadow-lg shadow-md"
            >
              <div className="">
                <img src={veg.img} alt="" className="w-16" />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-lg sm:text-xl font-semibold text-green-600">
                  {veg.title}
                </h1>
                <p className="text-sm sm:text-base text-gray-700">
                  {veg.desc}{" "}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Offer Banner  */}

      <div className="max-w-[1200px] mx-auto px-4 sm:px-10 select-none">
        <img
          src="./img/offerbanner.png
          "
          alt=""
          className="object-cover w-full rounded-lg select-none"
        />
      </div>
    </div>
  );
};

export default CateBanner;
