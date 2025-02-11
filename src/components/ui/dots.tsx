"use client";
import { useState } from "react";

const Carousel = ({ children }) => {
  const [position, setPosition] = useState(0);
  const total = children.length;

  const handleClick = (event) => {
    const newPosition = parseInt(event.target.dataset.position, 10);
    if (newPosition >= 0 && newPosition < total) {
      setPosition(newPosition);
    }
  };

  return (
    <div className="relative w-full   overflow-hidden border ">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${position * 100}%)` }}
      >
        {children.map((child, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>

      <div className="text-center mt-2">
        {Array.from({ length: total }).map((_, index) => (
          <span
            key={index}
            className={`cursor-pointer text-2xl mx-1 ${
              position === index ? "text-black" : "text-gray-400"
            }`}
            onClick={handleClick}
            data-position={index}
          >
            {position === index ? "●" : "○"}
          </span>
        ))}
      </div>
    </div>
  );
};
export default Carousel;
