import React from "react";
import Tour_card from "../shared/Tour_card";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const FeatureToursList = () => {
  // Fetch data from the API
  const { data: featureTours, loader, error } = useFetch(`${BASE_URL}/tours/search/feature`);

  // Ensure featureTours is always an array to prevent errors
  const toursArray = featureTours || [];

  return (
    <div className="container flex flex-col py-10">
      <h2 className="text-[40px] font-bold text-center text-gray-800 mb-6">
        Featured Tours
      </h2>

      {/* Display Loader */}
      {loader && <h2 className="text-center text-gray-600">Loading...</h2>}

      {/* Display Error */}
      {error && <h2 className="text-center text-red-500">{error}</h2>}

      {/* No Data Message */}
      {!loader && !error && toursArray.length === 0 && (
        <p className="text-gray-600 text-center">No featured tours available.</p>
      )}

      {/* Grid Layout for Tours */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full justify-items-center">
        {toursArray.map((tour) => (
          <Tour_card key={tour._id} tour={tour} />
        ))}
      </div>
    </div>
  );
};

export default FeatureToursList;
