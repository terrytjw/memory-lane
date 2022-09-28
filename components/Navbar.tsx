import React, { useEffect, useState } from "react";
import CustomLink from "./CustomLink";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const options = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Gallery", href: "/#gallery" },
];

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(true);
  const [color, setColor] = useState("white");
  const [bgColor, setBgColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setColor("black");
        setBgColor("white");
      } else {
        setColor("white");
        setBgColor("transparent");
      }
    };

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
    <nav className={`fixed left-0 top-0 w-full z-10 bg-${bgColor}`}>
      <div
        className={`max-w-[1240px] m-auto p-4 flex justify-between items-center text-${color}`}
      >
        <CustomLink href="/" className="font-bold text-2xl">
          Memory
        </CustomLink>
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
          className="block sm:hidden z-10 text-white"
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
                <CustomLink href="/">Memory</CustomLink>
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
