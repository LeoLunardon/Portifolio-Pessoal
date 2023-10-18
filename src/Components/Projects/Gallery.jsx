import React, { useState } from "react";
import Cards from "./Cards";

const Gallery = ({ projects }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const showNextCard = () => {
   setCurrentCardIndex ((prevIndex) =>
     prevIndex === projects.length - 1 ? 0 : prevIndex + 1
   );
  };
  const showPrevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery-container">
      <div className="flex  justify-between px-40">
        <button className=" text-white text-7xl mr-24" onClick={showPrevCard}>&#8592;</button>
        <Cards {...projects[currentCardIndex]} />
        <button className=" text-white text-7xl ml-24" onClick={showNextCard}>&#8594;</button>
      </div>
    </div>
  );
};

export default Gallery;
