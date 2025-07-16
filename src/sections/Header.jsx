import React, { useState } from 'react';
import { FaXmark, FaBars } from 'react-icons/fa6';
import { Link } from 'react-scroll';
import ashomLogo from '../assets/image/ashom.png';
import ashomSecLogo from '../assets/image/ASHOM-SEC.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navItem = [
        { link: 'Home', path: 'hero' },
        { link: 'About', path: 'about' },
        { link: 'Services', path: 'services' },
        { link: 'Projects', path: 'projects' },
        { link: 'Contact', path: 'contact' },
    ];

    return (
        <nav className='w-full flex bg-white justify-between items-center lg:px-16 px-6 py-4 top-0 z-50 shadow-md border-b border-gray-200'>
            {/* Clean Logo Section - NO CARDS */}
            <div className='flex items-center gap-8'>
                {/* ASHOM Construction Logo - Direct Display */}
                <div className='flex flex-col items-center'>
                    <img 
                        src={ashomLogo} 
                        alt='ASHOM Construction' 
                        className='h-16 md:h-18 lg:h-20 w-auto object-contain' 
                    />
                    <span className='text-xs text-gray-700 font-bold uppercase tracking-wider mt-1'>Construction</span>
                </div>
                
                {/* Simple Company Name Divider */}
                <div className='hidden md:flex flex-col items-center text-center'>
                    <h2 className='text-black font-bold text-2xl'>ASHOM</h2>
                    <div className='w-16 h-[2px] bg-yellow-500 my-1'></div>
                    <span className='text-gray-600 text-sm font-semibold'>COMPANY</span>
                </div>
                
                {/* ASHOM Specialized Logo - Direct Display */}
                <div className='flex flex-col items-center'>
                    <img 
                        src={ashomSecLogo} 
                        alt='ASHOM Specialized' 
                        className='h-16 md:h-18 lg:h-20 w-auto object-contain' 
                    />
                    <span className='text-xs text-gray-700 font-bold uppercase tracking-wider mt-1'>Piling, Foundation & Shoring</span>
                </div>
            </div>

            {/* Desktop Navigation Menu */}
            <ul className='lg:flex justify-center items-center gap-8 hidden'>
                {navItem.map((item, index) => (
                    <li key={index}>
                        <Link
                            to={item.path}
                            className='text-gray-800 uppercase font-bold cursor-pointer px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-black text-[15px] transition-all duration-300'
                            spy={true}
                            offset={-100}
                            smooth={true}
                        >
                            {item.link}
                        </Link>
                    </li>
                ))}
            </ul>
            
            {/* Call to Action Button */}
            <button className='bg-yellow-500 hover:bg-black text-black hover:text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 cursor-pointer md:flex hidden shadow-md'>
                GET QUOTE
            </button>

            {/* Mobile Menu Toggle */}
            <div className='flex justify-center items-center lg:hidden' onClick={toggleMenu}>
                {isMenuOpen ? (
                    <FaXmark className='text-yellow-500 text-3xl cursor-pointer' />
                ) : (
                    <FaBars className='text-yellow-500 text-3xl cursor-pointer' />
                )}
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-yellow-500 p-6 absolute top-[90px] left-0 shadow-xl`} onClick={closeMenu}>
                <ul className='flex flex-col justify-center items-center gap-4 w-full'>
                    {navItem.map((item, index) => (
                        <li key={index} className='w-full'>
                            <Link
                                to={item.path}
                                className='text-black uppercase font-bold cursor-pointer p-3 rounded-lg hover:bg-black hover:text-white w-full text-center block transition-all duration-300'
                                spy={true}
                                offset={-100}
                                smooth={true}
                            >
                                {item.link}
                            </Link>
                        </li>
                    ))}
                    <li className='mt-4 w-full'>
                        <button className='bg-black text-white px-6 py-3 rounded-lg font-bold w-full hover:bg-gray-800 transition-all duration-300'>
                            GET QUOTE
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;