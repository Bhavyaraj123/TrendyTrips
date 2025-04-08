import React, { memo } from "react";
import { Link } from "react-router-dom";

const Tour_card = ({ tour }) => {
  const { image, name, description, price, reviews, _id } = tour;
  const imageUrl = `http://localhost:8000/uploads/${image}`;

  const totalRating =
    reviews.length > 0 ? reviews.reduce((acc, item) => acc + item.rating, 0) : 0;
  const rating =
    reviews.length > 0 ? (totalRating / reviews.length).toFixed(1) : "No Ratings";

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl w-full max-w-[350px]">
      <div className="h-48 sm:h-56 w-full overflow-hidden">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
      </div>

      <div className="p-4 flex flex-col justify-between">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-lg sm:text-xl font-semibold text-orange-600">
            <Link to={`/tours/${_id}`}>
              <i className="ri-map-pin-line text-orange-500 text-2xl"></i> {name}
            </Link>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base flex items-center">
            {rating} <i className="ri-star-line text-orange-400 ml-1"></i>
          </p>
        </div>

        <p className="text-gray-600 text-sm sm:text-base mt-2 text-center line-clamp-2">{description}</p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-orange-500">&#8377; {price}/p</span>
          <Link to={`/tours/${_id}`}> 
            <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-all">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(Tour_card);
