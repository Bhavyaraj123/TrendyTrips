import React from "react";
import images from "./image"; // Import images array
import Subtitles from "../shared/Subtitles";

const Gallery = () => {
  return (
    <div className="container mx-auto px-20 py-5">
        <Subtitles Subtitles={"Gallery"}/>
      <h1 className="text-4xl font-bold mt-5 mb-10 text-left ">Visit Our Customers Tour Gallery</h1>
      
      {/* Masonry Layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
        {images.map((img) => (
          <div key={img.id} className="mb-6 break-inside-avoid overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
