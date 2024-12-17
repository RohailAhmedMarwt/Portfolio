import React from 'react';
import './Loader.css'; // Import your CSS file for the loader styles

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[rgb(28,67,159)] text-white"> {/* Set the same background color */}
      <div className="spinner">
        <div className="spinnerin"></div>
      </div>
    </div>
  );
};

export default Loader;
