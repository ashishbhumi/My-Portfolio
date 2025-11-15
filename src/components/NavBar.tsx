import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons from react-icons
import { motion } from "framer-motion"; // Import framer-motion for animations

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 p-4 shadow-lg bg-gradient-to-r from-gray-800 to-black">
      <div className="container flex items-center justify-between mx-auto">
        <div className="text-2xl font-bold text-white">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ashish Kumar
          </motion.div>
        </div>

        {/* Hamburger menu for mobile screens */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Menu links for larger screens */}
        <motion.div
          className={`lg:flex lg:items-center lg:space-x-6 hidden`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Link
            to="/"
            className="block mt-4 text-lg font-medium text-white transition-colors duration-300 lg:mt-0 hover:text-gray-400"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="block mt-4 text-lg font-medium text-white transition-colors duration-300 lg:mt-0 hover:text-gray-400"
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="block mt-4 text-lg font-medium text-white transition-colors duration-300 lg:mt-0 hover:text-gray-400"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block mt-4 text-lg font-medium text-white transition-colors duration-300 lg:mt-0 hover:text-gray-400"
          >
            Contact
          </Link>
        </motion.div>
      </div>

      {/* Mobile menu with animation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute left-0 w-full top-16 bg-gradient-to-r from-gray-800 to-black lg:hidden"
        >
          <div className="flex flex-col items-center p-4 space-y-4">
            <Link
              to="/"
              className="text-lg font-medium text-white transition-colors duration-300 hover:text-gray-400"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="text-lg font-medium text-white transition-colors duration-300 hover:text-gray-400"
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="text-lg font-medium text-white transition-colors duration-300 hover:text-gray-400"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-lg font-medium text-white transition-colors duration-300 hover:text-gray-400"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
