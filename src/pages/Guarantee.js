import React from 'react'
import { useEffect } from 'react';
import "./Guarantee.css"

const Guarantee = () => {
    useEffect(() => {
      const textElement = document.querySelector(".typing-text");
      if (textElement) {
        textElement.classList.add("start-typing");
      }
  
      const imageElement = document.querySelector(".slide-in-image");
      if (imageElement) {
        imageElement.classList.add("slide-in");
      }
    }, []);
  
    return (
      <>
        <div className="container mt-5">
          <div className="row">


          <div className="col-lg-4 col-md-4 col-sm-12 text-center right-child">
              <img
                className="slide-in-image "
                style={{ height: "450px", width: "340px" }}
                src="/images/guranti.png"
                alt="Profile"
              />
            </div>





            <div className="col-lg-8 col-md-8 col-sm-12   left-child">
              <h1 className="typing-text mt-5 toptext">GUARANTEE</h1>
              <p className=" mt-3 toppara">We guarantee top-quality, reliable services to ensure your satisfaction. Our secure, accurate platform provides a seamless experience. If you're not fully satisfied, our support team is ready to assist promptly. Your satisfaction is our priority. Contact us today to experience our commitment to excellence.</p>
              <button className="btn btn-secondary mx-0.125 topbutton">Learn more</button>
            </div>


            
          </div>
        </div>
  
      </>
    );
  };

export default Guarantee
