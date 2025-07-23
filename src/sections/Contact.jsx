import React, { useState } from 'react';
import {motion} from 'framer-motion'
import { slideUpVariants , zoomInVariants } from './animation';
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa6';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleWhatsAppSubmit = (e) => {
        e.preventDefault();
        const phoneNumber = "971526766963";
        const message = `Hello ASHOM Company!

New inquiry from your website:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service Division: ${formData.service}
Project Details: ${formData.message}

Please contact me for further discussion.`;

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };

    const handleDirectWhatsApp = () => {
        const phoneNumber = "971526766963";
        const message = "Hello! I'm interested in ASHOM Company services. Please provide more information.";
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };

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

                {/* Quick Contact Options */}
                <div className='mt-8 space-y-4'>
                    <h3 className='text-2xl font-bold text-black mb-4'>Quick Contact Options</h3>
                    <div className='flex flex-wrap gap-4'>
                        <button 
                            onClick={handleDirectWhatsApp}
                            className='bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 flex items-center gap-2 shadow-lg group'
                        >
                            <FaWhatsapp className='text-xl group-hover:scale-110 transition-transform duration-300' />
                            WhatsApp Now
                        </button>
                        <a 
                            href="tel:+971526766963"
                            className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 flex items-center gap-2 shadow-lg'
                        >
                            <FaPhone className='text-lg' />
                            Call Now
                        </a>
                        <a 
                            href="mailto:info@ashom-group.com"
                            className='bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 flex items-center gap-2 shadow-lg'
                        >
                            <FaEnvelope className='text-lg' />
                            Email Us
                        </a>
                    </div>
                </div>

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
                    onSubmit={handleWhatsAppSubmit}
                    initial="hidden"
                    whileInView='visible'
                    variants={zoomInVariants}
                    className='flex flex-col justify-center items-start gap-4 w-full bg-gray-50 p-8 rounded-lg shadow-lg border-2 border-yellow-500'>
                        
                        <h3 className='text-2xl font-bold text-black mb-4'>Get Your Free Consultation</h3>
                        
                        <input 
                            type='text' 
                            name='name'
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder='Enter Full Name' 
                            className='px-6 py-3 border-[2px] border-gray-300 focus:border-yellow-500 w-full text-black rounded-lg transition-all duration-300 outline-none'
                            required
                        />
                        
                        <input 
                            type='email' 
                            name='email'
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder='Enter Email Address' 
                            className='px-6 py-3 border-[2px] border-gray-300 focus:border-yellow-500 w-full text-black rounded-lg transition-all duration-300 outline-none'
                            required
                        />
                        
                        <input 
                            type='tel' 
                            name='phone'
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder='Enter Mobile Number' 
                            className='px-6 py-3 border-[2px] border-gray-300 focus:border-yellow-500 w-full text-black rounded-lg transition-all duration-300 outline-none'
                            required
                        />
                        
                        {/* Service Type Selection */}
                        <select 
                            name='service'
                            value={formData.service}
                            onChange={handleInputChange}
                            className='px-6 py-3 border-[2px] border-gray-300 focus:border-yellow-500 w-full text-black rounded-lg transition-all duration-300 outline-none'
                            required
                        >
                            <option value="">Select Service Division</option>
                            <option value="construction">Construction Division (Building & Design)</option>
                            <option value="specialized">Specialized Division (Piling & Foundation)</option>
                            <option value="both">Both Divisions</option>
                            <option value="consultation">General Consultation</option>
                        </select>
                        
                        <textarea 
                            name='message'
                            value={formData.message}
                            onChange={handleInputChange}
                            rows='4' 
                            placeholder='Describe your project requirements...' 
                            className='px-6 py-3 border-[2px] border-gray-300 focus:border-yellow-500 w-full text-black rounded-lg transition-all duration-300 outline-none resize-vertical'
                            required
                        />
                        
                        <motion.button
                            type="submit"
                            variants={zoomInVariants}
                            className='bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg w-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group'
                            >
                            <FaWhatsapp className='text-xl group-hover:scale-110 transition-transform duration-300' />
                            SEND VIA WHATSAPP
                        </motion.button>
                        
                        <p className='text-sm text-gray-600 text-center mt-2'>
                            Click to send your inquiry directly via WhatsApp - Our ASHOM experts will respond within 24 hours.
                        </p>
                </motion.form>
            </motion.div>

        </div>
        </div>
    );
};

export default Contact;