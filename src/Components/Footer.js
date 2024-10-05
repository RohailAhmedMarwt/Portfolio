import React from 'react';

const Footer = () => {
  return (
    <footer className="py-2 mt-10"> {/* Removed background */}
      <div className="container mx-auto flex flex-col items-center text-white"> {/* Center align all items */}
        
        {/* Social Media Links */}
        <div className="flex space-x-4 mb-2"> {/* Adjusted margin below icons */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-500 transform hover:rotate-[360deg] hover:scale-105 hover:animate-pulse"
          >
            <i className="fab fa-github fa-lg"></i> {/* GitHub Icon */}
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-500 transform hover:rotate-[360deg] hover:scale-105 hover:animate-pulse"
          >
            <i className="fab fa-linkedin fa-lg"></i> {/* LinkedIn Icon */}
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-500 transform hover:rotate-[360deg] hover:scale-105 hover:animate-pulse"
          >
            <i className="fab fa-instagram fa-lg"></i> {/* Instagram Icon */}
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-sm opacity-70">© Marwatify 2024 All Rights Reserved</p> {/* Copyright text */}
      </div>
    </footer>
  );
};

export default Footer;
