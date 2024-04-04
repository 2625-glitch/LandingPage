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
    const navigate = useNavigate();

    function handleAccountClick() {
        console.log('handle click called')
        navigate('/dashboard')
    }
    const handleMenuItemClick = (path) => {
        if (path === '/demos') {
            navigate(path);
        } 
    }

    // navItems Array
    const navItems = [
        {link: 'Demos' , path: '/demos'},
        {link: 'Home' , path: 'home'},
        {link: 'Works' , path: 'works'},
        {link: 'Service' , path: 'service'},
        {link: 'Pricing' , path: 'pricing'},
        {link: 'Contact' , path: 'contact'},
    ];
    return (
        <header className="w-full max-md:bg-black bg-white fixed top-0 left-0 right-0 px-20" >
            <nav className={`py-4 lg:px-14 px-16 ${isSticky? "sticky top-0 left-0 right-0 border-b max-md:bg-black bg-white duration-300": " " }`}>
                <div className="flex justify-between items-center text-base gap-8">
                <img src={ReactLogo} alt="" className="hidden md:block" /> 
                    {/*Nav Items for larger devices */}
                    <ul className='md:flex space-x-12 hidden cursor-pointer'>
                        {
                            navItems.map(({link,path}) =>  <Link to={path} spy={true} key={path} smooth={true} offset={-100} className="block text-base font-semibold text-slate-900 hover:bg-gray-100 first:font-medium"   onClick={() => handleMenuItemClick(path)}
                            >{link}</Link>)
                        }

                    </ul>
                    {/*My account for larger devices*/}
                    <div className="space-x-12 hidden lg:flex items-center" onClick={handleAccountClick}>
                    <Link to="/dashboard" className="hidden lg:flex items-center hover:bg-gray-100" onClick={handleAccountClick}>
             <span><PersonIcon/></span> My account
                    </Link>
                    </div>
                    {/*Menu icon for mobile devices*/}
                    <div className="md:hidden fixed top-5 right-5 rounded-full bg-white p-3">
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
                    </div>
                    {/*Nav items for mobile devices */}
                        {isMenuOpen && ( 
                            <div   className="fixed inset-y-0 right-0 bg-white w-64 shadow-lg z-50  transition-transform duration-300 transform translate-x-0 flex flex-col">
                            <div className="pt-4 px-5  flex flex-row justify-between">
                            <img src={ReactLogo} alt=""/> 
                            <FaXmark  onClick={toggleMenu} className="h-6 w-6 text-gray-500" />
                            </div>
                            <div  className="py-8 px-5 ">
                        {navItems.map(({ link, path }) => (
                            <Link
                             to={path}
                             spy={true}
                             key={path}
                             smooth={true}
                            offset={-100}
                            className="block text-base  font-semibold py-4 hover:bg-gray-100"
                            onClick={() => handleMenuItemClick(path)}
                            >
                             {link}
                            </Link>
                        ))}
                             </div >
                             <div  className="mt-auto py-8 px-5">
                                    <div className="text-base font-semibold" onClick={handleAccountClick}>
                                     <Link to="/dashboard"  onClick={handleAccountClick}>
                                     <span><PersonIcon/></span> My account
                                     </Link>
                                 </div>
                        </div>
                        </div>   
                         )}
                        </div>
            </nav>


        </header>
    );
};

export default Navbar;