import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navber.css';

const Navber = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[rgb(28,67,159)] border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Logo Link */}
                <a href="/" className="flex items-center">
                    <img
                        src="/images/1.png"
                        className="h-11 transition-transform duration-500 transform hover:rotate-[360deg] hover:scale-105"
                        alt="Logo"
                    />
                </a>
                <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
                    {/* Social Media Icons */}
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin-icon">
                        <i className="fab fa-linkedin fa-lg"></i>
                    </a>
                    <a href="https://www.instagram.com/rohailahmed333/" target="_blank" rel="noopener noreferrer" className="social-icon instagram-icon">
                        <i className="fab fa-instagram fa-lg"></i>
                    </a>
                    <a href="https://github.com/RohailAhmedMarwt?tab=repositories" target="_blank" rel="noopener noreferrer" className="social-icon github-icon">
                        <i className="fab fa-github fa-lg"></i>
                    </a>
                </div>
                <button onClick={toggleDropdown} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-cta" aria-expanded={isOpen}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`items-center justify-between ${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-cta">
                    <ul className="flex flex-col font-medium mr-16 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                        <li>
                            <Link to="/" className="block py-2 px-3 md:p-0 text-black rounded hover:text-[#f3661d] transition-all duration-300 hover:animate-pulse" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to="/my-work" className="block py-2 px-3 md:p-0 text-black rounded hover:text-[#f3661d] transition-all duration-300 hover:animate-pulse">My Work</Link>
                        </li>
                        <li>
                            <Link to="/skills" className="block py-2 px-3 md:p-0 text-black rounded hover:text-[#f3661d] transition-all duration-300 hover:animate-pulse">Skills</Link>
                        </li>
                        <li>
                            <Link to="/get-in-touch" className="block py-2 px-3 md:p-0 text-black rounded hover:text-[#f3661d] transition-all duration-300 hover:animate-pulse underline decoration-transparent hover:decoration-[#f3661d]">Get in Touch</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navber;
