import React, { useState, useEffect } from 'react';
import Navber from './Components/Navber';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Loader from './pages/Loader';
import 'flowbite';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loader after 1 second
    }, 800);

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return (
    <div className="bg-[rgb(28,67,159)] min-h-screen text-white"> {/* Set background and text color */}
      {loading ? (
        <Loader /> // Show loader only while loading
      ) : (
        <>
          <Navber />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-work" element={<Projects />} />
            <Route path="/get-in-touch" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;
