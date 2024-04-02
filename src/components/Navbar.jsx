import React, { useEffect, useState } from "react";
import  landingIntro from "../assets/elements-landing2/sq-9.jpg"
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import ReactLogo from '../assets/react.svg';
import PersonIcon from '@mui/icons-material/Person';
const Navbar = () => {
    const [isMenuOpen , setIsMenuOpen] = useState(false);
    const [isSticky , setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect( ()=> {
        const handleScroll= () => {
            if(window.scrollY > 100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll' , handleScroll);
        return () => {
            window.addEventListener('scroll' , handleScroll);
        }
    });
    const history = useNavigate();

    function handleAccountClick() {
        console.log('handle click called')
        history('/dashboard')
    }
    const handleMenuItemClick = (path) => {
        setIsMenuOpen(false); 
    }

    // navItems Array
    const navItems = [
        {link: 'Demos' , path: "demos"},
        {link: 'Home' , path: 'home'},
        {link: 'Works' , path: 'works'},
        {link: 'Service' , path: 'service'},
        {link: 'Pricing' , path: 'pricing'},
        {link: 'Contact' , path: 'contact'},
    ];
    return (
        <header className="w-full bg-white fixed top-0 left-0 right-0 px-20">
            <nav className={`py-4 lg:px-14 px-16 ${isSticky? "sticky top-0 left-0 right-0 border-b bg-white duration-300": " " }`}>
                <div className="flex justify-between items-center text-base gap-8">
                <img src={ReactLogo} alt="" className="hidden md:block" /> 
                    {/*Nav Items for larger devices */}
                    <ul className='md:flex space-x-12 hidden cursor-pointer'>
                        {
                            navItems.map(({link,path}) =>  <Link to={path} spy={true} key={path} smooth={true} offset={-100} className="block text-base font-semibold text-slate-900 hover:bg-gray-100 first:font-medium">{link}</Link>)
                        }

                    </ul>
                    {/*My account for larger devices*/}
                    <div className="space-x-12 hidden lg:flex items-center" onClick={handleAccountClick}>
                        <a href="/" className="hidden lg:flex items-center hover:bg-gray-100"><span><PersonIcon/></span> My account</a>
                    </div>
                    {/*Menu icon for mobile devices*/}
                    <div className="md:hidden absolute  rounded-full right-5 top-5">
                        <button
                            className="focus:outline-none focus:text-white-500" 
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? (
                                <FaXmark className="h-6 w-6 text-gray-500" />
                            ) : (
                                <FaBars className="h-6 w-6 text-gray-500" />
                            )}
                        </button>
                        {/*Nav items for mobile devices */}
                        {isMenuOpen && ( 
                  <div className="absolute top-0 right-0 transform transition-transform duration-300 space-y-8 px-4 mt-4 py-2 bg-gray-300 max-w-6xl">
            {navItems.map(({ link, path }) => (
                <Link
                    to={path}
                    spy={true}
                    key={path}
                    smooth={true}
                    offset={-100}
                    className="block text-base font-semibold text-slate-900 hover:bg-gray-100 first:font-medium"
                    onClick={() => handleMenuItemClick(path)}
                >
                    {link}
                </Link>
            ))}
            {/* My account for smaller devices */}
            <div className="block text-base font-semibold text-slate-900 hover:bg-gray-100 first:font-medium mt-32" onClick={handleAccountClick}>
                <a href="/" className="block"><span><PersonIcon/></span>My account</a>
            </div>
        </div>
    )}

                    </div>
                </div>
            </nav>


        </header>
    );
};

export default Navbar;