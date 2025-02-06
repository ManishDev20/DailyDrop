import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { FaWhatsapp, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div id="Navbar" className="sticky top-0 z-50 bg-[#eaf2ea] ">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="logo">
          <img
            src="./img/DailydropLogo.webp"
            alt="DailyDrop Logo"
            className="w-10"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <div className="flex items-center gap-4">
            <a href="#home" className="text-gray-500 hover:text-green-700">
              Home
            </a>
            <a
              href="#Categories"
              className="text-gray-500 hover:text-green-700"
            >
              Categories
            </a>
            <a href="#offers" className="text-gray-500 hover:text-green-700">
              Offers
            </a>
          </div>
          <div className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-900">
            <FaShoppingBag className="text-lg" />
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-green-500 border-2 border-white rounded-full -top-2 -right-2">
              20
            </div>
          </div>
          <div className="mx-5 bg-green-200 px-4 py-2 flex gap-5 rounded-full">
            <a
              href="tel:+917400136503"
              className="group bg-white hover:bg-blue-700 p-2 rounded-full"
            >
              <IoIosCall className="text-blue-700 group-hover:text-white text-xl" />
            </a>
            <a
              href="https://wa.me/9575375257"
              className="group bg-white hover:bg-green-700 p-2 rounded-full"
            >
              <FaWhatsapp className="text-green-700 group-hover:text-white text-xl" />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-green-700 text-2xl focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-[#eaf2ea] md:hidden transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center gap-4 py-4">
          <a href="#home" className="text-gray-500 hover:text-green-700">
            Home
          </a>
          <a href="#Categories" className="text-gray-500 hover:text-green-700">
            Categories
          </a>
          <a href="#offers" className="text-gray-500 hover:text-green-700">
            Offers
          </a>
          <div className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-900">
            <FaShoppingBag className="text-lg" />
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-green-500 border-2 border-white rounded-full -top-2 -right-2">
              20
            </div>
          </div>
          <div className="flex gap-5 bg-green-200 px-4 py-2 rounded-full">
            <a
              href="tel:+917400136503"
              className="group bg-white hover:bg-blue-700 p-2 rounded-full"
            >
              <IoIosCall className="text-blue-700 group-hover:text-white text-xl" />
            </a>
            <a
              href="https://wa.me/9575375257"
              className="group bg-white hover:bg-green-700 p-2 rounded-full"
            >
              <FaWhatsapp className="text-green-700 group-hover:text-white text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
