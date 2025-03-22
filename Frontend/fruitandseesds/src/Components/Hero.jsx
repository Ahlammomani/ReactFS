import React from 'react';

const HeroSection = () => {
  // Custom colors
  const greenColor = "#99BC85"; // Green for button and text
  const accentColor = "#DAC3BC"; // Beige/tan for background
  
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background image covering entire section */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('/api/placeholder/1920/1080')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Beige overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: accentColor, opacity: 0.8 }}></div>
      </div>
      
      {/* Content positioned on top of the background */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white">
            <span className="block">Why don't you be healthy</span>
            <span className="block" style={{ color: greenColor }}>even when you're eating sweets!</span>
          </h1>
          
          <div className="mt-8 flex justify-center">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white md:py-4 md:text-lg md:px-10 transition-colors duration-300"
                style={{ backgroundColor: greenColor }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#88A776"}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = greenColor}
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;