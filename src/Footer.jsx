import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-black backdrop-blur-lg border-t border-white/10 text-white py-10 px-6 z-[60] ">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-4 text-center">
        {/* Name */}
        <h2 className="text-2xl font-bold">Alishba</h2>

        {/* Role */}
        <p className="text-lg text-gray-300">Front-End Developer</p>

        {/* Short Description */}
        <p className="max-w-xl text-sm text-gray-400">
          Passionate about creating smooth, interactive, and modern web
          experiences with React, Tailwind CSS, and animations.
        </p>

        {/* Divider */}
        <div className="w-150 h-px bg-white/10 my-2"></div>

        {/* Footer Links */}
        <div className="flex space-x-6 text-sm text-gray-400">
          <a href="#section1" className="hover:text-white transition">
            Home
          </a>
          <a href="#section6" className="hover:text-white transition">
            Projects
          </a>
          <a
            href="https://github.com/alishbye"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="mailto:your-email@example.com"
            className="hover:text-white transition"
          >
            Contact
          </a>
        </div>

        {/* Bottom Note */}
        <p className="text-xs text-gray-500 mt-4">
          © {new Date().getFullYear()} Alishba. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
