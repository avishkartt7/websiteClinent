import React from 'react';
import ashomLogo from '../assets/image/ashom.png'
import ashomSecLogo from '../assets/image/ASHOM-SEC.png'
import {motion} from 'framer-motion'
import { slideUpVariants , zoomInVariants } from './animation';
import { FaWhatsapp } from 'react-icons/fa6';

const Hero = () => { 
    // WhatsApp click handler
    const handleWhatsAppClick = () => {
        const phoneNumber = "971526766963";
        const message = "Hello! I'm interested in ASHOM Company services. Please provide more information.";
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <div id='hero' className='w-full lg:h-[700px] h-fit m-auto pt-[60px] lg:pt-[80px] lg:px-[150px] px-[20px] flex justify-between items-center lg:flex-row flex-col lg:gap-10 gap-[50px] bg-white'>
           
           <motion.div 
           initial ="hidden"
           whileInView="visible"
           variants={slideUpVariants}
           className='lg:w-[60%] w-full flex flex-col justify-center items-start lg:gap-8 gap-6'
           >
            <motion.h1
                variants={slideUpVariants}
                className='text-yellow-500 text-xl font-bold uppercase tracking-widest'
            >
                DUAL EXPERTISE - COMPREHENSIVE SOLUTIONS
            </motion.h1>
            
            <motion.h1
                variants={slideUpVariants} 
                className='text-black uppercase text-[48px] lg:text-[52px] font-bold leading-tight'
            >
                Building Dreams &  
                <span className='text-yellow-500'> Infrastructure Excellence</span>
            </motion.h1>
            
            <div className='w-[100px] h-[4px] bg-yellow-500'></div>
            
            <motion.p
                variants={slideUpVariants}
                className='text-gray-600 text-lg leading-relaxed max-w-2xl'
            >
                <strong className='text-black'>ASHOM Construction</strong> delivers excellence in residential and commercial projects, while our specialized division masters <strong className='text-black'>piling, foundation engineering, and advanced shoring</strong>. Experience next-generation construction solutions.
            </motion.p>

            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={zoomInVariants}
                className='flex flex-wrap gap-4 mt-6'
            >
                <motion.button
                variants={zoomInVariants}
                className='bg-yellow-500 hover:bg-black text-black hover:text-white px-10 py-3 rounded-lg font-bold transition-all duration-300 shadow-md'
                >
                    EXPLORE SERVICES
                </motion.button>
                <motion.button
                variants={zoomInVariants}
                onClick={handleWhatsAppClick}
                className='bg-green-500 hover:bg-green-600 text-white px-10 py-3 rounded-lg font-bold transition-all duration-300 flex items-center gap-2 shadow-md group'
                >
                    <FaWhatsapp className='text-xl group-hover:scale-110 transition-transform duration-300' />
                    GET CONSULTATION
                </motion.button>
            </motion.div>
           </motion.div>
           
           {/* SIMPLE Logo Section - Just BIGGER Images */}
           <motion.div 
           initial='hidden'
           whileInView='visible'
           variants={zoomInVariants}
           className='lg:w-[50%] w-full flex flex-col justify-center items-center gap-2'
           >
            {/* First Logo - Simple & BIGGER */}
            <motion.div 
            variants={slideUpVariants}
            className='flex flex-col items-center gap-1 text-center'
            >
                <img
                    src={ashomLogo}
                    alt='ASHOM Construction'
                    className='h-[180px] lg:h-[220px] w-auto object-contain'
                />
                <div>
                    <h3 className='text-black text-2xl font-bold mb-1'>ASHOM CONSTRUCTION</h3>
                    <p className='text-gray-500 text-sm uppercase tracking-wider font-semibold'>Residential & Commercial Solutions</p>
                </div>
            </motion.div>

            {/* Simple Divider */}
            <motion.div 
            variants={zoomInVariants}
            className='w-12 h-[2px] bg-yellow-500'
            >
            </motion.div>

            {/* Second Logo - Simple & BIGGER */}
            <motion.div 
            variants={slideUpVariants}
            className='flex flex-col items-center gap-1 text-center'
            >
                <img
                    src={ashomSecLogo}
                    alt='ASHOM'
                    className='h-[180px] lg:h-[220px] w-auto object-contain'
                />
                <div>
                    <h3 className='text-black text-2xl font-bold mb-1'>ASHOM</h3>
                    <p className='text-gray-500 text-sm uppercase tracking-wider font-semibold'>Piling, Foundation & Shoring</p>
                </div>
            </motion.div>
           </motion.div>
        </div>
    );
};

export default Hero;