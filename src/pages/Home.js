import React, { useState, useEffect } from "react";
import Loader from './Loader'; // Import the Loader component
import "./Home.css";
import Projects from "./Projects"; // Import the Projects component
import Contact from "./Contact";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import Skills from "./Skills";

const Home = () => {
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000); // Time interval set to 2 seconds

    return () => clearTimeout(timer); // Cleanup function
  }, []);

  if (loading) {
    return <Loader />; // Show Loader component if loading
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 text-white relative overflow-hidden pulsing-background">
      {/* Hero Section */}
      <div className="text-center p-6 mb-10 relative z-10">
        <h1 className="text-5xl font-bold mb-12 animate-glow-text text-white animate-heading">
          {Array.from("Do You Need a Web Developer?").map((letter, index) => (
            <span key={index} style={{ "--index": index }} className="animate-bounce-letter">
              {letter === " " ? "\u00A0" : letter}
            </span> // Space handling
          ))}
        </h1>

        <p className="text-3xl mb-6 text-yellow-400 subheading tracking-widest animate-text-slide">
          I, Rohail Marwat, Am Here!
        </p>
        <p className="text-lg max-w-5xl mx-auto text-gray-200 leading-relaxed animate-fade-in-fast">
          I am a passionate Full Stack Developer. My work including dynamic web pages also involves media-in-action projects built on the latest technologies. I am well versed in the MERN stack (I strength): mongoDB, Express.js, React.js, Node.js. For team projects, both the appearance of the design and the performance of the final product are essential. And when necessary for employment reasons as well as pleasure, I am learning continuously.
        </p>
      </div>
      {/* Image Section */}
      <div className="flex flex-col items-center mb-20 mt-[-50px]">
        <img
          src="/images/pic1.png"
          alt="Hero"
          className="w-3/4 h-auto transition-transform duration-700 ease-in-out transform hover:scale-10 hover:rotate-3 animate-slide-in-left" 
        />
        <Link
          to="/my-work"
          className="relative button-glow px-6 mt-6 py-3 bg-[#f3661d] text-white rounded-full hover:bg-[#d3571a] hover:shadow-[0_0_20px_#ff6a00] hover:scale-100 transition-all duration-500 ease-out transform "
          onClick={() => window.scrollTo(0, 0)} // This will scroll to the top
        >
          View My Work
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-500 to-red-500 opacity-50 rounded-full transition-opacity duration-500 "></span>
        </Link>
      </div>
      {/* Projects Section */}
      <Skills/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
