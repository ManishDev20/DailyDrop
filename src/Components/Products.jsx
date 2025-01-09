import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const featuredProducts = [
  {
    id: 1,
    name: "Amla",
    MRP: 35,
    price: 25,
    image: "./img/amla.png",
    weight: "500gm",
  },
  {
    id: 2,
    name: "Broccoli",
    MRP: 50,
    price: 40,
    image: "./img/broccoli.png",
    weight: "500gm - 600gm",
  },
  {
    id: 3,
    name: "Capsicum",
    MRP: 60,
    price: 45,
    image: "./img/capsicum.png",
    weight: "500gm",
  },
  {
    id: 4,
    name: "Cabbage",
    MRP: 50,
    price: 40,
    image: "./img/cabbage.png",
    weight: "500gm - 700gm",
  },
  {
    id: 5,
    name: "Coriander",
    MRP: 30,
    price: 20,
    image: "./img/coriander.png",
    weight: "250gm",
  },
  {
    id: 6,
    name: "Potato",
    MRP: 50,
    price: 40,
    image: "./img/potato.png",
    weight: "1kg",
  },
  {
    id: 7,
    name: "Onion",
    MRP: 80,
    price: 60,
    image: "./img/onion.png",
    weight: "1kg",
  },
  {
    id: 8,
    name: "Ginger",
    MRP: 50,
    price: 40,
    image: "./img/ginger.png",
    weight: "500gm - 700gm",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-10 bg-[#fff]  overflow-hidden px-4">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ x: "100%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className=""
        >
          <h1 className="secHead w-full py-10 text-center text-green-800 text-4xl sm:text-5xl font-bold uppercase">
            Vegetables <span className="secHead text-black">& </span>{" "}
            <span className="secHead text-orange-500">Fruits</span>
          </h1>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch gap-4 pt-10">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0 }}
              className="col-span-1"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
