import React from "react";
import image from "../../public/photo2.jpg";
import { BiLogoGithub, BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";
import { FaSlack } from "react-icons/fa";
import '../App.css';
/* import Orb from "./Orb.jsx";
import "./Orb.css"; */
import DarkMode from "./DarkMode.jsx";

const Home = () => {
  return (
    <div
      id="Startseite"
      className="flex min-h-screen w-full items-center justify-center"
    >
      <DarkMode />
      <div className=" orb-container ">
        {/*    <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        /> */}
      </div>

      <div className="flex flex-col items-center justify-center gap-8 p-5 text-center relative">
        <img
          src={image}
          alt="my_photo"
          className="w-[200px] sm:w-[300px] rounded-full  mt-20 sm:mt-22 relative"
        />

        <div className="space-y-1 sm:space-y-3 ">
          <h1 className="bg-gradient-to-r from-teal-600 to-teal-200 bg-clip-text text-4xl font-semibold text-transparent md:text-4xl lg:text-5xl mt-8">
            Nataliia Petrukhina
          </h1>
          <h2 className="bg-gradient-to-r from-teal-600 to-teal-200 bg-clip-text text-xl font-semibold text-transparent md:text-2xl lg:text-3xl">
            Webentwicklerin
          </h2>
          <p className="max-w-[500px] text-lg text-gray-200 mt-2 glowing-text animated-hase">
           { "Folge dem weißen Hasen".split("").map((char, index) =>(
              <span key={index}
               style={{ anamationDelay: `${index * 0.1}s`}}
               className="glow-letter">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </p>
          <div className="flex gap-3 justify-center mt-8">
            <BiLogoGithub className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-indigo-800 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-indigo-400 hover:bg-indigo-400 hover:text-white md:h-12 md:w-12" />
            <FaSlack className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-indigo-800 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-indigo-400 hover:bg-indigo-400 hover:text-white md:h-12 md:w-12" />
            <BiLogoLinkedin className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-indigo-800 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-indigo-400 hover:bg-indigo-400 hover:text-white md:h-12 md:w-12" />
            <BiLogoInstagram className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-indigo-800 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-indigo-400 hover:bg-indigo-400 hover:text-white md:h-12 md:w-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
