import React from 'react';
import {motion} from 'framer-motion'
import { slideUpVariants , zoomInVariants } from './animation';
import { allservices } from '../export';

const Services = () => {
    return (
        <div id='services' className='w-full bg-gray-50 py-20'>
            <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
            className='lg:w-[80%] w-[90%] m-auto flex flex-col justify-center items-center gap-[30px]'
            >
                <motion.h3
                variants={slideUpVariants}
                className='text-yellow-500 text-xl uppercase font-bold tracking-widest'
                >
                    COMPREHENSIVE SOLUTIONS
                </motion.h3>
                
                <motion.h2
                variants={slideUpVariants}
                className='uppercase text-black text-5xl font-bold text-center max-w-4xl'
                >Our Dual Expertise Services</motion.h2>
                
                <motion.div
                variants={zoomInVariants}
                className='w-[120px] h-[6px] bg-yellow-500'
                ></motion.div>

                {/* Service Categories Description */}
                <motion.div
                variants={slideUpVariants}
                className='text-center max-w-4xl mx-auto mb-12'
                >
                    <p className='text-gray-700 text-lg leading-relaxed'>
                        Our company offers a complete spectrum of construction and infrastructure services. 
                        <span className='font-bold text-yellow-600'> ASHOM Construction</span> focuses on building excellence, while our 
                        <span className='font-bold text-yellow-600'> Specialized Division</span> delivers advanced infrastructure solutions.
                    </p>
                </motion.div>

                {/* Services Grid - Impressive Card Format */}
                <motion.div
                initial='hidden'
                whileInView='visible'
                variants={zoomInVariants}
                className='w-full grid lg:grid-cols-3 grid-cols-1 gap-10 mt-[40px]'
                >
                    {
                        allservices.map((service, index) => (
                            <motion.div
                            key={index}
                            variants={zoomInVariants}
                            className='group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-yellow-200'
                            >
                                {/* Service Icon */}
                                <div className='flex justify-center mb-6'>
                                    <div className='relative'>
                                        <div className='w-20 h-20 bg-yellow-50 rounded-2xl border-3 border-yellow-500 flex items-center justify-center group-hover:bg-yellow-500 transition-all duration-300'>
                                            <img 
                                                src={service.icon} 
                                                alt='service icon' 
                                                className='w-10 h-10 object-contain group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300'
                                            />
                                        </div>
                                        <div className='absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center'>
                                            <span className='text-white text-xs font-bold'>{index + 1}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Service Title */}
                                <h3 className='text-2xl font-bold text-gray-900 text-center mb-4 group-hover:text-yellow-600 transition-colors duration-300'>
                                    {service.title}
                                </h3>
                                
                                {/* Service Category Badge */}
                                <div className='flex justify-center mb-4'>
                                    <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                                        index < 3 
                                            ? 'bg-blue-100 text-blue-800' 
                                            : 'bg-green-100 text-green-800'
                                    }`}>
                                        {index < 3 ? 'CONSTRUCTION' : 'SPECIALIZED'}
                                    </span>
                                </div>

                                {/* Service Description */}
                                <p className='text-gray-600 text-center leading-relaxed mb-8 line-clamp-4'>
                                    {service.about}
                                </p>
                                
                                {/* Learn More Button */}
                                <div className='flex justify-center'>
                                    <button className='w-full bg-yellow-500 hover:bg-black text-black hover:text-white py-3 px-6 rounded-xl font-bold transition-all duration-300 transform group-hover:scale-105 shadow-md hover:shadow-lg'>
                                        Learn More
                                    </button>
                                </div>
                            </motion.div>
                        ))
                    }
                </motion.div>

                {/* Bottom Call to Action */}
                <motion.div
                variants={slideUpVariants}
                className='mt-20 text-center bg-gradient-to-r from-yellow-500 to-yellow-600 p-12 rounded-3xl w-full shadow-2xl'
                >
                    <h3 className='text-white text-3xl font-bold mb-4'>Ready to Start Your Project?</h3>
                    <p className='text-yellow-100 text-lg mb-8 max-w-2xl mx-auto'>
                        Whether you need construction services or specialized infrastructure solutions, our expert teams are ready to deliver excellence.
                    </p>
                    <div className='flex gap-6 justify-center flex-wrap'>
                        <motion.button
                        variants={zoomInVariants}
                        className='bg-white hover:bg-gray-100 text-yellow-600 hover:text-yellow-700 px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg transform hover:scale-105'
                        >
                            Construction Services
                        </motion.button>
                        <motion.button
                        variants={zoomInVariants}
                        className='border-2 border-white hover:bg-white text-white hover:text-yellow-600 px-8 py-4 rounded-xl font-bold transition-all duration-300'
                        >
                            Specialized Solutions
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Services;