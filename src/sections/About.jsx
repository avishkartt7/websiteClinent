import React from 'react';
import {motion} from 'framer-motion'
import { slideUpVariants , zoomInVariants } from './animation';

const About = () => {
    return (
        <div id='about' className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]'>
            <motion.div
            initial='hidden'
            whileInView='visible'
            variants={slideUpVariants}
            className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'
            >
                <motion.h1
                variants={slideUpVariants}
                className='uppercase text-yellow-500 text-2xl'
                >
                    Welcome to
                </motion.h1>
                <motion.h1
                variants={slideUpVariants}
                className='text-5xl font-bold text-white uppercase'
                >
                    Ashom Construction
                </motion.h1>
                <div className='w-[120px] h-[6px] bg-yellow-500'></div>
                <p className='text-3xl italic text-gray-50 mt-[60px]'>Your Trusted Partner in Modern Construction Solutions</p>

            </motion.div>
            
            <motion.div
            initial='hidden'
            whileInView='visible'
            variants={slideUpVariants}
            className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'
            >
                <p className='text-white text-lg text-justify'>As an emerging force in Dubai's construction industry, Ashom Construction brings fresh perspectives and innovative approaches to building excellence. Our dedicated team combines modern techniques with quality craftsmanship to deliver outstanding results.</p>
                <p className='text-white text-lg text-justify'>Discover our commitment to transforming Dubai's skyline with cutting-edge construction solutions and unmatched attention to detail.</p>
                <motion.button
                variants={zoomInVariants}
                className='bg-yellow-500 hover:bg-white  text-white hover:text-black py-3 px-10 rounded-md hover:bg-yellow
                -600 transition duration-300 font-bold'
                >
                    Learn More
                </motion.button>
            </motion.div>

        </div>
    );
};

export default About;