import React from 'react';

const Navbar = () => {
  return (
<nav id="navbar" className="sticky top-0 z-[80] bg-[#082434]/40 p-4 shadow-md backdrop-blur-lg backdrop-filter border-b border-[#0a2e43]/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          <a href="#">ALISHBA</a>
        </div>
        
        <div className="hidden lg:flex flex-1 justify-center space-x-10">
          <a href="#" className="text-white hover:text-gray-300 text-[20px]">Home</a>
          <a href="#" className="text-white hover:text-gray-300 text-[20px]">Skills</a>
          <a href="#" className="text-white hover:text-gray-300 text-[20px]">Projects</a>
        </div>
        
        <div className="hidden lg:block">
          <button className="relative inline-flex items-center justify-center px-8 py-2 overflow-hidden tracking-tighter text-white rounded-md group transition duration-300">
            {/* Expanding white background on hover */}
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56"></span>

            {/* Left decorative SVG */}
            <span className="absolute bottom-0 left-0 h-full -ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-auto h-full opacity-100 object-stretch" viewBox="0 0 487 487">
                <path fillOpacity=".1" fillRule="nonzero" fill="#FFF" d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z" />
              </svg>
            </span>

            {/* Right decorative SVG */}
            <span className="absolute top-0 right-0 w-12 h-full -mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="object-cover w-full h-full" viewBox="0 0 487 487">
                <path fillOpacity=".1" fillRule="nonzero" fill="#FFF" d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z" />
              </svg>
            </span>

            {/* Background gradient overlay */}
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-white"></span>

            {/* Text */}
            <span className="relative text-[20px] font-semibold group-hover:text-black transition duration-300">Download CV</span>
          </button>
        </div>
        
        <div className="block lg:hidden">
          <button id="hamburger" className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;