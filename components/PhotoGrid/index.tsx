import React from "react";
import Photo from "./Photo";
import { sliderData } from "../../data";

const PhotoGrid = () => {
  return (
    <div id="instagram" className="max-w-[1240px] mx-auto text-center py-24">
      <h1 className="text-2xl font-bold">Me on Instagram</h1>
      <h2 className="text-gray-400">@t3reetan</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-2 p-4">
        {sliderData.map((item, index) => {
          return <Photo key={index} photoUrl={item.imageUrl} />;
        })}
      </div>
    </div>
  );
};

export default PhotoGrid;
