import React from 'react';
import {motion} from 'framer-motion'
import { slideUpVariants , zoomInVariants } from './animation';

const Contact = () => {
    return (
        <div id='contact'className='bg-white w-full'>
             <div className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]'>
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
                    Contact ASHOM Company
                </motion.h1>
                <motion.h1
                variants={slideUpVariants}
                className='text-5xl font-bold text-black uppercase'
                >
                    Ready to Build Your Vision?
                </motion.h1>
                <div className='w-[120px] h-[6px] bg-yellow-500'></div>
                <p className='text-3xl italic text-gray-600 mt-[60px]'>
                    From construction dreams to specialized infrastructure - we're here to make it happen!
                </p>

                {/* Business Division Info */}
                <div className='mt-8 space-y-6'>
                    <div className='bg-gray-100 p-6 rounded-lg border-l-4 border-yellow-500'>
                        <h3 className='text-xl font-bold text-black mb-2'>CONSTRUCTION DIVISION</h3>
                        <p className='text-gray-700'>For residential and commercial building projects, interior design, and renovation services.</p>
                        <ul className='text-sm text-gray-600 mt-2 ml-4'>
                            <li>• Residential Building</li>
                            <li>• Commercial Construction</li>
                            <li>• Interior Design & Renovation</li>
                        </ul>
                    </div>
                    <div className='bg-gray-100 p-6 rounded-lg border-l-4 border-yellow-500'>
                        <h3 className='text-xl font-bold text-black mb-2'>SPECIALIZED DIVISION</h3>
                        <p className='text-gray-700'>For piling solutions, foundation engineering, and advanced shoring systems.</p>
                        <ul className='text-sm text-gray-600 mt-2 ml-4'>
                            <li>• Piling Solutions</li>
                            <li>• Foundation Engineering</li>
                            <li>• Shoring Systems</li>
                        </ul>
                    </div>
                </div>

            </motion.div>
            
            <motion.div
            initial='hidden'
            whileInView='visible'
            variants={slideUpVariants}
            className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'
            >
                <motion.form
                    initial="hidden"
                    whileInView='visible'
                    variants={zoomInVariants}
                    className='flex flex-col justify-center items-start gap-4 w-full bg-gray-50 p-8 rounded-lg shadow-lg border-2 border-yellow-500'>
                        
                        <h3 className='text-2xl font-bold text-black mb-4'>Get Your Free Consultation</h3>
                        
                        <input 
                            type='text' 
                            placeholder='Enter Full Name' 
                            className='px-6 py-3 border-[2px] border-gray-300 focus:border-yellow-500 w-full text-black rounded-lg transition-all duration-300 outline-none'
                        />
                        
                        <input 
                            type='email' 
                            placeholder='Enter Email Address' 
                            className='px-6 py-3 border-[2px] border-gray-300 focus:border-yellow-500 w-full text-black rounded-lg transition-all duration-300 outline-none'
                        />
                        
                        <input 
                            type='tel' 
                            placeholder='Enter Mobile Number' 
                            className='px-6 py-3 border-[2px] border-gray-300 focus:border-yellow-500 w-full text-black rounded-lg transition-all duration-300 outline-none'
                        />
                        
                        {/* Service Type Selection */}
                        <select 
                            className='px-6 py-3 border-[2px] border-gray-300 focus:border-yellow-500 w-full text-black rounded-lg transition-all duration-300 outline-none'
                        >
                            <option value="">Select Service Division</option>
                            <option value="construction">Construction Division (Building & Design)</option>
                            <option value="specialized">Specialized Division (Piling & Foundation)</option>
                            <option value="both">Both Divisions</option>
                            <option value="consultation">General Consultation</option>
                        </select>
                        
                        <textarea 
                            rows='4' 
                            placeholder='Describe your project requirements...' 
                            className='px-6 py-3 border-[2px] border-gray-300 focus:border-yellow-500 w-full text-black rounded-lg transition-all duration-300 outline-none resize-vertical'
                        />
                        
                        <motion.button
                            variants={zoomInVariants}
                            className='bg-yellow-500 hover:bg-black text-black hover:text-white font-bold py-4 px-6 rounded-lg w-full transition-all duration-300 transform hover:scale-105 shadow-lg'
                            >
                            GET FREE CONSULTATION
                        </motion.button>
                        
                        <p className='text-sm text-gray-600 text-center mt-2'>
                            Our ASHOM experts will contact you within 24 hours to discuss your project requirements.
                        </p>
                </motion.form>
            </motion.div>

        </div>
        </div>
    );
};

export default Contact;