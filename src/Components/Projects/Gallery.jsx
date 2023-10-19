import React, { useState } from "react";
import Cards from "./Cards";

const Gallery = ({ projects }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const showNextCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };
  const showPrevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className=" relative gallery-container mb-60">
      <div className="sm:flex justify-between sm:px-40">
        <Cards {...projects[currentCardIndex]} />
      </div>
      <div className="absolute top-96 pt-20 left-0 right-0 text-center pb-4">
        <button
          className=" text-white text-7xl inline-block mx-4"
          onClick={showPrevCard}
        >
          &#8592;
        </button>
        <button
          className=" text-white text-7xl inline-block mx-4"
          onClick={showNextCard}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Gallery;
