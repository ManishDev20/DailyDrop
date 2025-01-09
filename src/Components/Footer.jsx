import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1  md:grid-cols-3 gap-8">
          <div>
            <div className="flex gap-4 items-center my-2  ">
              <img src="./img/DailydropLogo.webp" alt="" className="w-16" />
              <h3 className="text-xl font-bold mb-4 secHead">Daily Drop</h3>
            </div>
            <p className="text-gray-400">
              Your trusted source for fresh, organic vegetables delivered to
              your doorstep.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-400 hover:text-white">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Veggie Street</li>
              <li>Fresh City, FC 12345</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@freshveggies.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Daily Drop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
