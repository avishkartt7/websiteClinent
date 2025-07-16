import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaPhone, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import ashomLogo from '../assets/image/ashom.png';
import ashomSecLogo from '../assets/image/ASHOM-SEC.png';

const Footer = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <footer className='bg-gray-900 text-white py-16 relative'>
            <div className='container mx-auto px-6 lg:px-12'>
                {/* Main Footer Content */}
                <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12'>
                    
                    {/* Company Logo & Info Section */}
                    <div className='lg:col-span-2 flex flex-col items-start'>
                        <h3 className='text-yellow-500 text-2xl font-bold mb-8 uppercase tracking-wider'>ASHOM Company</h3>
                        <p className='text-gray-300 mb-8 text-lg'>One Company, Two Specialized Divisions</p>
                        
                        {/* ASHOM Construction Division */}
                        <div className='flex items-center gap-6 mb-8 p-6 bg-white rounded-lg w-full shadow-lg'>
                            <img 
                                src={ashomLogo} 
                                alt='ASHOM Construction Division' 
                                className='h-20 lg:h-24 w-auto object-contain' 
                            />
                            <div className='flex-1'>
                                <h4 className='text-black font-bold text-xl mb-2'>ASHOM CONSTRUCTION</h4>
                                <p className='text-yellow-600 text-sm font-semibold mb-1'>Building Excellence Division</p>
                                <p className='text-gray-700 text-sm leading-relaxed'>Specializing in residential and commercial construction projects with modern techniques and quality craftsmanship.</p>
                            </div>
                        </div>
                        
                        {/* ASHOM Specialized Division */}
                        <div className='flex items-center gap-6 p-6 bg-white rounded-lg w-full shadow-lg'>
                            <img 
                                src={ashomSecLogo} 
                                alt='ASHOM Specialized Division' 
                                className='h-20 lg:h-24 w-auto object-contain' 
                            />
                            <div className='flex-1'>
                                <h4 className='text-black font-bold text-xl mb-2'>ASHOM FOR PILLING AND FOUNDATION</h4>
                                <p className='text-yellow-600 text-sm font-semibold mb-1'>Infrastructure Specialists</p>
                                <p className='text-gray-700 text-sm leading-relaxed'>Expert solutions in piling, foundation engineering, and advanced shoring systems for complex projects.</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className='flex flex-col items-start'>
                        <h3 className='text-yellow-500 text-xl font-bold mb-6 uppercase tracking-wider'>Contact Us</h3>
                        <div className='space-y-4'>
                            <div className='flex items-start gap-4'>
                                <FaMapMarkerAlt className='text-yellow-500 mt-1 text-lg' />
                                <div>
                                    <p className='text-white font-semibold'>Dubai, UAE</p>
                                    <p className='text-gray-400 text-sm'>United Arab Emirates</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <FaPhone className='text-yellow-500 text-lg' />
                                <div>
                                    <p className='text-white font-semibold'>+971-52-676-6963</p>
                                    <p className='text-gray-400 text-sm'>24/7 Support</p>
                                </div>
                            </div>
                            <div className='flex items-start gap-4'>
                                <FaEnvelope className='text-yellow-500 mt-1 text-lg' />
                                <div>
                                    <p className='text-white font-semibold'>info@ashom.com</p>
                                    <p className='text-gray-400 text-sm'>General Inquiries</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <FaGlobe className='text-yellow-500 text-lg' />
                                <div>
                                    <p className='text-white font-semibold'>www.ashom.com</p>
                                    <p className='text-gray-400 text-sm'>Visit Our Website</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Services & Expertise */}
                    <div className='flex flex-col items-start'>
                        <h3 className='text-yellow-500 text-xl font-bold mb-6 uppercase tracking-wider'>Our Services</h3>
                        <div className='space-y-6'>
                            {/* Construction Services */}
                            <div>
                                <h4 className='text-white font-bold mb-3'>Construction Division</h4>
                                <ul className='space-y-2 text-gray-300 text-sm'>
                                    <li>• Residential Building</li>
                                    <li>• Commercial Construction</li>
                                    <li>• Interior Design</li>
                                    <li>• Renovation Services</li>
                                </ul>
                            </div>
                            
                            {/* Specialized Services */}
                            <div>
                                <h4 className='text-white font-bold mb-3'>Specialized Division</h4>
                                <ul className='space-y-2 text-gray-300 text-sm'>
                                    <li>• Piling Solutions</li>
                                    <li>• Foundation Engineering</li>
                                    <li>• Shoring Systems</li>
                                    <li>• Infrastructure Projects</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer Section */}
                <div className='border-t border-gray-700 pt-8'>
                    <div className='flex flex-col lg:flex-row justify-between items-center gap-6'>
                        {/* Social Media Links */}
                        <div className='flex gap-6'>
                            <a
                                href='https://github.com/sumu9897'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='bg-gray-800 p-3 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-110'
                            >
                                <FaGithub size={20} />
                            </a>
                            <a
                                href='https://linkedin.com/in/md-sumon9897'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='bg-gray-800 p-3 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-110'
                            >
                                <FaLinkedin size={20} />
                            </a>
                            <a
                                href='mailto:mohammad.sumon9897@gmail.com'
                                className='bg-gray-800 p-3 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-110'
                            >
                                <FaEnvelope size={20} />
                            </a>
                        </div>

                        {/* Copyright Information */}
                        <div className='text-center lg:text-right'>
                            <p className='text-white font-semibold mb-1'>
                                &copy; {new Date().getFullYear()} ASHOM Company
                            </p>
                            <p className='text-gray-400 text-sm'>
                                Construction & Specialized Infrastructure - All rights reserved.
                            </p>
                            <p className='text-yellow-500 text-xs mt-1 font-semibold'>
                                Building Dreams • Engineering Excellence • Since 2015
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className='fixed bottom-8 right-8 bg-yellow-500 text-black p-4 rounded-full shadow-2xl hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-110 z-50'
                aria-label='Scroll to top'
            >
                <FaArrowUp size={24} />
            </button>
        </footer>
    );
};

export default Footer;