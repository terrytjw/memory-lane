import Image from "next/image";
import React, { useState } from "react";
import { sliderData } from "../data";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;

  const handlePrevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const handleNextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <h1 className="p-4 text-2xl font-bold text-center">Gallery</h1>
      {sliderData.map((item, index) => {
        return (
          index === current && (
            <div key={index} className="relative p-4">
              <FaArrowCircleLeft
                className="absolute top-[50%] left-10 w-9 h-9 sm:w-12 sm:h-12 z-[1] text-white/40 cursor-pointer select-none hover:text-white/70 transition-all"
                onClick={handlePrevSlide}
              />

              <Image
                src={item.imageUrl}
                alt="mountain photo"
                width="1440"
                height="600"
                objectFit="cover"
              />

              <FaArrowCircleRight
                size={50}
                className="absolute top-[50%] right-10 w-9 h-9 sm:w-12 sm:h-12 z-[1] text-white/40 cursor-pointer select-none hover:text-white/70 transition-all"
                onClick={handleNextSlide}
              />
              <p className="p-4 text-center italic">{item.description}</p>
            </div>
          )
        );
      })}
    </div>
  );
};

export default Slider;
