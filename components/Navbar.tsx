import React, { useEffect, useState } from "react";
import CustomLink from "./CustomLink";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { logoVariant, pathVariant } from "../motionVariants/navbar";

const options = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "#gallery" },
  { name: "Instagram", href: "#instagram" },
];

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
    };

    // Listen to scroll events
    window.addEventListener("scroll", handleScroll);

    return () => {
      // cleanup event listeners to prevent memory leaks
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobileMenu = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <nav
      className={`fixed left-0 top-0 w-full z-10 ${
        isScrolledDown ? `bg-white` : `bg-transparent`
      } transition-colors`}
    >
      <div
        className={`max-w-[1240px] m-auto p-4 flex justify-between items-center ${
          isScrolledDown ? `text-black` : `text-white`
        }`}
      >
        <motion.span
          variants={logoVariant}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <CustomLink href="/" className="font-bold text-3xl">
            <motion.svg
              className={`inline-block w-[40px] mt-2 mr-2 overflow-visible linecap-round linejoin-round group-hover:stroke-gray-500 transition-all stroke-[4] ${
                isScrolledDown ? `stroke-black` : `stroke-white`
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <motion.path
                fill="none"
                d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
                variants={pathVariant}
              />
              <motion.path
                fill="none"
                d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
                variants={pathVariant}
              />
            </motion.svg>
            Memories
          </CustomLink>
        </motion.span>

        <ul className="hidden sm:flex">
          {options.map((option) => {
            return (
              <li key={option.name} className="p-4">
                <CustomLink href={option.href}>{option.name}</CustomLink>
              </li>
            );
          })}
        </ul>

        {/* Mobile Button */}
        <button
          className={`block sm:hidden z-10 ${isMobileNavOpen && `text-white`}`}
          onClick={handleMobileMenu}
        >
          {isMobileNavOpen ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </button>

        {/* Mobile Menu */}
        {isMobileNavOpen && (
          <div className="sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-white text-center">
            <ul>
              <li className="p-4 text-3xl">
                <CustomLink href="/">Memories</CustomLink>
              </li>
              {options.map((option) => {
                return (
                  <li key={option.name} className="p-4 text-3xl">
                    <CustomLink href={option.href}>{option.name}</CustomLink>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
