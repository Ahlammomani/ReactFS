import React from 'react'
import heroImage from "../assets/hero-image.jpeg";

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Container with controlled height */}
      <div className="relative h-96 md:h-[500px]">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Homemade treats"
          className="w-full h-full object-cover"
        />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
          <h1 className="text-2xl md:text-4xl font-semibold text-[#A5B68D] max-w-2xl mb-4">
            Delicious, homemade treats from a mother-daughter duo
          </h1>
          <button className="mt-2 px-6 py-2 bg-[#C1CFA1] text-[#E7CCCC] font-medium rounded-full shadow-md hover:bg-[#A5B68D] transition">
            Order Now
          </button>
        </div>
      </div>
      
      {/* Bottom Curve - simplified to match image */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full">
          <path 
            fill="#EDE8DC" 
            d="M0,0 C240,95 480,100 720,80 C960,60 1200,40 1440,90 L1440,100 L0,100 Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default Hero