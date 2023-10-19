import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="flex h-screen overflow-x-hidden">
      <div className="flex flex-col justify-center text-white mx-auto h-60 my-auto">
        <div className="border-title ">
          <h1 className="title-text ">Leonardo Lunardon</h1>
        </div>
        <div className="w-96 p-2 text-center text-3xl bg-gray-950 rounded-xl mx-auto">
          <TypeAnimation
            sequence={["Desenvolvedor", 2000, "React / Node / Java", 2000]}
            speed={20}
            wrapper="span"
            repeat={Infinity}
          />
        </div>
        <div className="mt-20 text-2xl flex opacity-70 mx-auto gap-5 sm:gap-20">
          <a href="https://github.com/LeoLunardon" target={"_blank"} className="flex items-center">
            <button
              type="button"
              className="hover:scale-110 transition flex items-center w-40 h-10 text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg"
            >
              <img
                src="https://i.imgur.com/BVyDqxi.png"
                width={30}
                alt=""
                className="mr-2 ml-4"
              />
              <span className="no-underline">GitHub</span>
            </button>
          </a>
          <a href="https://www.linkedin.com/in/leonardo-lunardon-00875b1a8/" target={"_blank"}   className="flex items-center">
            <button
              type="button"
              className="hover:scale-110 transition flex items-center w-40 h-10 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg"
            >
              <img
                src="https://i.imgur.com/8xIcGrr.png"
                width={30}
                alt=""
                className="mr-2 ml-4"
              />
              <span className="no-underline">LinkedIn</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
