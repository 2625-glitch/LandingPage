import React, { useEffect, useState } from "react";
import landingIntro from "../assets/elements-landing2/sq-9.jpg";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
const MyAccount = ({ className }) => {
  return (
    <div className={className}>
      <a href="/" className="flex hover:bg-gray-100">
        <div>
          <img src="../../vite.svg" className="w-5 h-5 mx-2"></img>
        </div>
        <div>My account</div>
      </a>
    </div>
  );
};

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
    <header
      className={`w-full bg-white fixed top-0 left-0 right-0 ${
        !isMenuOpen ? `max-md:bg-transparent` : `max-md:bg-gray-100`
      }`}
    >
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : " "
        }`}
      >
        <div className="flex items-center md:justify-around max-md:justify-end text-base gap-8 ">
          <div className="flex items-center text-base gap-5 ">
            <img
              src="../../public/react.png"
              className="w-10 h-10 max-md:hidden"
            ></img>
            {/*Nav Items for larger devices */}
            <ul className="md:flex space-x-12 hidden">
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
          </div>
          {/*My account for larger devices*/}
          <MyAccount
            className={"space-x-12 flex flex-row items-center  max-md:hidden"}
          />
          {/*Menu icon for mobile devices*/}
          <div className="md:hidden">
            <button
              className="focus.:outline-none focus:text-gray-500"
              onClick={toggleMenu}
            >
              <div className="bg-gray-300 p-3 rounded-full">
                {isMenuOpen ? (
                  <FaXmark className="h-6 w-6 text-black" />
                ) : (
                  <FaBars className="h-6 w-6 text-black" />
                )}
              </div>
            </button>
          </div>
        </div>
        {/*Nav items for mobile devices */}
        <div
          className={`flex flex-col items-end left-aut0 right-0 space-y-8  mt-16   bg-transparent h-screen w-screen${
            isMenuOpen ? "" : "hidden"
          }  `}
        >
          <div
            className={`w-1/4 bg-gray-100 flex flex-col items-center justify-center ${
              isMenuOpen ? "" : "hidden"
            }`}
          >
            <div>
              {navItems.map(({ link, path }) => (
                <Link
                  to={path}
                  spy={true}
                  key={path}
                  smooth={true}
                  offset={-100}
                  className="block text-base font-semibold  hover:bg-gray-100 first:font-medium p-2 cursor-pointer"
                >
                  {link}
                </Link>
              ))}
            </div>

            <MyAccount
              className={"space-x-12 flex items-center justify-center"}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
