import React from "react";
import { useEffect, useState } from "react";
import './index.css'
const Badges = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  useEffect(() => {
    setIsAnimated(true);
  },[]);

  const badges = [
    {
      name: "HTML",
      hover: "hover:text-orange-500",
    },
    {
      name: "CSS",
      hover: "hover:text-green-500",
    },
    {
      name: "JavaScript",
      hover: "hover:text-blue-500",
    },
    {
      name: "React",
      hover: "hover:text-red-500",
    },
    {
      name: "Node.js",
      hover: "hover:text-yellow-500",
    },
    {
      name: "Java",
      hover: "hover:text-purple-500",
    },
    {
      name: "Firebase",
      hover: "hover:text-orange-800",
    }
  ];

  return (
    <div className={`flex flex-wrap w-1/2 justify-center mx-auto gap-2 p-2 ${isAnimated ? "animate-move" : ""}`}>
      {badges.map((badge, index) => (
        <span
          key={index}
          className={`bg-gray-100 text-3xl 2xl:text-5xl transition duration-150 ease-in-out ${badge.hover} hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] hover:scale-110 cursor-default font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300`}
        >
          {badge.name}
        </span>
      ))}
    </div>
  );
};

export default Badges;
