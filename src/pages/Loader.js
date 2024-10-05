// Loader.js
import React from 'react';
import './Loader.css'; // Import your CSS file for the loader styles

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500">
      <div className="spinner">
        <div className="spinnerin"></div>
      </div>
    </div>
  );
};

export default Loader;
