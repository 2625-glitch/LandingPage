import React, { useEffect, useState } from "react";
import landingIntro from "../assets/elements-landing2/sq-9.jpg";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //set toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });
  const history = useNavigate();

  function handleAccountClick() {
    console.log("handle click called");
    history("/dashboard");
  }
  // navItems Array
  const navItems = [
    { link: "Demos", path: "demos" },
    { link: "Home", path: "home" },
    { link: "Works", path: "works" },
    { link: "Service", path: "service" },
    { link: "Pricing", path: "pricing" },
    { link: "Contact", path: "contact" },
  ];
  return (
    <header className="w-full bg-white fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : " "
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a href="">
            <img src="" alt="" />
            React
          </a>
          {/*Nav Items for larger devices */}
          <ul className="md:flex space-x-12 hidden cursor-pointer">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                key={path}
                smooth={true}
                offset={-100}
                className="block text-base font-semibold text-slate-900 hover:bg-gray-100 first:font-medium"
              >
                {link}
              </Link>
            ))}
          </ul>
          {/*My account for larger devices*/}
          <div
            className="space-x-12 hidden lg:flex items-center"
            onClick={handleAccountClick}
          >
            <a
              href="/"
              className="hidden lg:flex items-center hover:bg-gray-100"
            >
              {" "}
              My account
            </a>
          </div>
          {/*Menu icon for mobile devices*/}
          <div className="md:hidden">
            <button
              className="focus.:outline-none focus:text-gray-500"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 text-gray-500" />
              ) : (
                <FaBars className="h-6 w-6 text-gray-500" />
              )}
            </button>
          </div>
        </div>
        {/*Nav items for mobile devices */}
        <div
          className={`space-y-8 px-4 mt-16 py-16 bg-gray-300  ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              spy={true}
              key={path}
              smooth={true}
              offset={-100}
              onClick={() => setIsMenuOpen(false)}
              className="block text-base font-semibold text-slate-900 hover:bg-gray-100 first:font-medium"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
