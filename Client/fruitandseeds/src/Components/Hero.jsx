import React from 'react';
import { motion } from 'framer-motion';
import heroImage from "../assets/hero-image.jpeg";

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Main Hero Container */}
      <motion.div 
        className="relative h-screen min-h-[600px] max-h-[800px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Image with Darker Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Homemade treats"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 "></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="block mb-2">Delicious, Homemade Treats</span>
              <span className="text-2xl md:text-4xl font-normal">From Our Family to Yours</span>
            </h1>
            
            <motion.p 
              className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Crafted with love by a mother-daughter duo using only the finest natural ingredients
            </motion.p>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.9, type: 'spring' }}
            >
              <button className="px-8 py-3 bg-[#A5B68D] hover:bg-[#8FA07A] text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Order Now
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-8 left-8 opacity-20">
          <svg width="120" height="120" viewBox="0 0 200 200" className="text-[#A5B68D]">
            <path fill="currentColor" d="M40,-57C53.7,-49.1,68.2,-41.3,73.8,-29.1C79.4,-16.8,76.2,-0.1,70.9,13.9C65.6,27.9,58.3,39.3,47.3,49.5C36.3,59.7,21.7,68.8,5.4,72.4C-10.8,76,-27.7,74.1,-39.9,65.3C-52.1,56.5,-59.6,40.8,-65.1,25.2C-70.6,9.6,-74.1,-5.9,-68.3,-17.9C-62.5,-29.9,-47.4,-38.4,-34.1,-46.5C-20.8,-54.6,-9.4,-62.3,2.3,-65.8C13.9,-69.3,27.9,-68.6,40,-57Z"></path>
          </svg>
        </div>

        <div className="absolute bottom-8 right-8 opacity-20">
          <svg width="150" height="150" viewBox="0 0 200 200" className="text-[#C1CFA1]">
            <path fill="currentColor" d="M49.3,-59.7C62.2,-50.7,70.1,-34.8,72.7,-18.9C75.3,-3,72.6,12.9,64.3,26.1C56,39.3,42.1,49.8,26.8,58.2C11.5,66.6,-5.2,72.9,-20.3,68.8C-35.4,64.7,-48.9,50.2,-58.8,33.4C-68.7,16.6,-75.1,-2.5,-70.3,-18.3C-65.5,-34.1,-49.6,-46.6,-33.9,-55C-18.2,-63.4,-2.7,-67.7,12.3,-63.9C27.3,-60.1,54.6,-48.2,49.3,-59.7Z"></path>
          </svg>
        </div>
      </motion.div>

      {/* Wave Divider - More Pronounced */}
      <div className="relative w-full h-24 md:h-32 -mt-1">
        <svg 
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          <path 
            fill="white"
            d="M0,0 C150,95 350,25 500,80 C650,135 850,5 1000,60 C1150,115 1350,45 1440,100 L1440,120 L0,120 Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default Hero;