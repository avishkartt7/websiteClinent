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
                    ASHOM Company
                </motion.h1>
                <div className='w-[120px] h-[6px] bg-yellow-500'></div>
                <p className='text-3xl italic text-gray-50 mt-[60px]'>One Company, Two Specialized Divisions - Your Complete Construction Partner</p>

            </motion.div>
            
            <motion.div
            initial='hidden'
            whileInView='visible'
            variants={slideUpVariants}
            className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'
            >
                {/* ASHOM Construction Division Description */}
                <div className='mb-6 p-6 bg-gray-800 rounded-lg border-l-4 border-yellow-500'>
                    <h3 className='text-yellow-500 text-xl font-bold mb-3'>CONSTRUCTION DIVISION</h3>
                    <p className='text-white text-lg text-justify mb-4'>
                        Our construction division brings fresh perspectives and innovative approaches to residential and commercial building projects. We combine modern techniques with quality craftsmanship to deliver outstanding results in Dubai's dynamic construction industry.
                    </p>
                </div>

                {/* ASHOM Specialized Division Description */}
                <div className='mb-6 p-6 bg-gray-800 rounded-lg border-l-4 border-yellow-500'>
                    <h3 className='text-yellow-500 text-xl font-bold mb-3'>SPECIALIZED DIVISION</h3>
                    <p className='text-white text-lg text-justify mb-4'>
                        Our specialized division focuses on complex infrastructure projects including advanced piling solutions, foundation engineering, and sophisticated shoring systems. We deliver precision-engineered solutions for challenging construction requirements.
                    </p>
                </div>

                <p className='text-white text-lg text-justify mb-6'>
                    As <strong className='text-yellow-500'>ASHOM Company</strong>, we represent a comprehensive approach to construction excellence. Whether you need traditional building services or specialized infrastructure solutions, our dual expertise ensures we have the right team for your project.
                </p>

                <motion.div
                variants={zoomInVariants}
                className='flex gap-4 flex-wrap'
                >
                    <motion.button
                    variants={zoomInVariants}
                    className='bg-yellow-500 hover:bg-white text-black hover:text-black py-3 px-8 rounded-md font-bold transition-all duration-300 shadow-lg'
                    >
                        Construction Services
                    </motion.button>
                    <motion.button
                    variants={zoomInVariants}
                    className='bg-transparent border-2 border-yellow-500 hover:bg-yellow-500 text-yellow-500 hover:text-black py-3 px-8 rounded-md font-bold transition-all duration-300'
                    >
                        Specialized Solutions
                    </motion.button>
                </motion.div>
            </motion.div>

        </div>
    );
};

export default About;