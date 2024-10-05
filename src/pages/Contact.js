import React from 'react';

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500"> {/* Full screen gradient background */}

      <div className="w-[30rem]  bg-[#212121] border-2 border-transparent bg-clip-padding p-10 rounded-lg shadow-lg flex flex-col gap-6 border-[#f3661d]"> {/* Increased padding to restore background */}
        
        {/* Contact Heading */}
        <h2 className="text-4xl font-bold mb-4 animate-glow-text text-white text-center">Contact Me</h2> {/* Heading outside the form */}
        
        {/* Form Section */}
        <form className="flex flex-col gap-4"> {/* Reduced gap */}
          {/* Name Field */}
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-white font-semibold text-xs">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 rounded-lg text-white bg-transparent border border-[#f3661d] focus:outline-none focus:border-[#f3661d] placeholder:text-[#717171] placeholder:opacity-70 focus:placeholder:text-transparent" // Reduced padding
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-white font-semibold text-xs">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 rounded-lg text-white bg-transparent border border-[#f3661d] focus:outline-none focus:border-[#f3661d] placeholder:text-[#717171] placeholder:opacity-70 focus:placeholder:text-transparent" // Reduced padding
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-white font-semibold text-xs">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full p-2 rounded-lg text-white bg-transparent border border-[#f3661d] focus:outline-none focus:border-[#f3661d] placeholder:text-[#717171] placeholder:opacity-70 focus:placeholder:text-transparent" // Reduced padding
              placeholder="Enter your password"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-1">
            <label htmlFor="textarea" className="text-white font-semibold text-xs">How Can I Help You?</label>
            <textarea
              name="textarea"
              id="textarea"
              rows="3"
              required
              className="w-full p-2 rounded-lg text-white bg-transparent border border-[#f3661d] resize-none focus:outline-none focus:border-[#f3661d] placeholder:text-[#717171] placeholder:opacity-70 focus:placeholder:text-transparent" // Reduced padding
              placeholder="Type your message here..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <a
              href="#projects"
              className="relative button-glow px-5 mt-4 py-2 bg-[#f3661d] text-white rounded-full hover:bg-[#d3571a] hover:shadow-[0_0_20px_#ff6a00] hover:scale-100 transition-all duration-500 ease-out transform"
            >
              Submit here
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-600 to-red-700 opacity-50  rounded-full transition-opacity duration-500"></span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
