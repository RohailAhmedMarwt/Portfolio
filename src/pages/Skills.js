import React from "react";
import Footer from "../Components/Footer";

// Skill images and data
const skills = [
  {
    name: "HTML",
    image: "/images/11.png",
    proficiency: 91,
    color: "#c04e26", // Darker color for circle
    project: {
      name: "HTML Project",
      img: "/images/net2.png", // Add the actual project image path
      link: "#", // Replace with the actual project link
    },
  },
  {
    name: "CSS",
    image: "/images/22.png",
    proficiency: 85,
    color: "#1f4e99", // Darker color for circle
    project: {
      name: "CSS Project",
      img: "/images/net1.png", // Add the actual project image path
      link: "#", // Replace with the actual project link
    },
  },
  {
    name: "Node.js",
    image: "/images/33.png",
    proficiency: 80,
    color: "#6BAA3B", // Darker color for circle
    project: {
      name: "Node.js Project",
      img: "/images/net1.png", // Add the actual project image path
      link: "#", // Replace with the actual project link
    },
  },
  {
    name: "React",
    image: "/images/44.png",
    proficiency: 75,
    color: "#51A1CB", // Darker color for circle
    project: {
      name: "React Project",
      img: "/images/div.png", // Add the actual project image path
      link: "#", // Replace with the actual project link
    },
  },
  {
    name: "JavaScript",
    image: "/images/java.png",
    proficiency: 85,
    color: "#D0C84F", // Darker color for circle
    project: {
      name: "JavaScript Project",
      img: "/images/qlab2.png", // Add the actual project image path
      link: "#", // Replace with the actual project link
    },
  },
  {
    name: "Tailwind CSS",
    image: "/images/tal.png",
    proficiency: 85,
    color: "#3193D4", // Darker color for circle
    project: {
      name: "Tailwind Project",
      img: "/images/qlab1.png", // Add the actual project image path
      link: "#", // Replace with the actual project link
    },
  },
];

const Skills = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 min-h-screen flex flex-col items-center justify-center p-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-12 animate-glow-text text-white">My Skills</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {skills.map((skill, index) => (
              <div
                className="skill mb-8 flex flex-col items-center p-2 transition-transform duration-300 transform hover:scale-105 shadow-md hover:shadow-xl w-72"
                key={index}
              >
                <h3 className="text-lg font-semibold mb-1 text-black">{skill.name}</h3>
                <svg width="120" height="120" className="circle mb-1">
                  <circle className="circle-bg" cx="60" cy="60" r="50" fill="none" stroke="#e0e0e0" strokeWidth="6" />
                  <circle
                    className="circle-progress"
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    style={{
                      stroke: skill.color,
                      strokeDasharray: `${skill.proficiency} 100`,
                      transition: 'stroke-dasharray 0.5s ease-in-out',
                      animation: 'borderAnimation 2s linear infinite',
                    }}
                    strokeWidth="6"
                  />
                  <image
                    href={skill.image}
                    width="60" // Increase image size
                    height="60" // Increase image size
                    x="30" // Center the image
                    y="30" // Center the image
                    className="rotate-image" // Add the fan effect on hover
                  />
                </svg>

                {/* Centered proficiency percentage text */}
                <p className="text-xl font-bold mt-2 text-gray-200">{skill.proficiency}%</p>
                
                {/* Colored bars for proficiency */}
                <div className="w-full h-2 bg-gray-300 mt-1">
                  <div
                    className={`h-full`}
                    style={{
                      width: `${skill.proficiency}%`,
                      backgroundColor: skill.color,
                    }}
                  />
                </div>

                <h4 className="text-md font-semibold text-black mt-1">{skill.project.name}</h4>
                <a className="mt-1 cursor-pointer">
                  <img
                    src={skill.project.img}
                    alt={skill.project.name}
                    className="w-full h-32 object-cover rounded-lg shadow-md transition-transform duration-300"
                  />
                </a>
              </div>
            ))}
          </div>

          {/* Qualifications Section */}
          <div className="mt-10 text-white">
            <h3 className="text-2xl font-bold">Qualifications</h3>
            <p className="text-md mt-2">Matriculation: Passed with 80%</p>
          </div>
        </div>

        {/* CSS Animation for Hover Effect */}
        <style jsx>{`
          .rotate-image {
            transition: transform 0.5s ease; // Smooth transition on hover
            transform-origin: center; // Center rotation
          }

          .rotate-image:hover {
            transform: rotate(-360deg); // Rotate to the left in place on hover
          }

          @keyframes borderAnimation {
            0% { stroke-dasharray: 0 100; }
            50% { stroke-dasharray: 100 0; }
            100% { stroke-dasharray: 0 100; }
          }
        `}</style>
      </div>
    </>
  );
};

export default Skills;
