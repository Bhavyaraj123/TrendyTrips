  import React, { useRef } from "react";
  import { ToastContainer, toast } from 'react-toastify';
  import { Navigate, useNavigate } from "react-router-dom";
  import { BASE_URL } from "../utils/config";
  const SearchBar = () => {
    const LocationRef = useRef("");
    const distanceref = useRef(0);
    const peopleRf = useRef(0);
  const navigate  =useNavigate()
    const submitHandler =async (e) => {
      e.preventDefault();
      const location = LocationRef.current.value;
      const distance = distanceref.current.value;

      if (!location || !distance ) { 
        toast.warn("All fields are required",);
        return;
      }
      const res = await fetch(`${BASE_URL}/tours/search?name=${location}&distance=${distance}`)
      if(!res.ok){
        alert("Something is wrong")
      }
      const result = await res.json()
    navigate(`/tours/search?name=${location}&distance=${distance}`,{state:result.data})
    };

    return (
      <div className="px-10 py-6 bg-white shadow-lg rounded-lg md:mt-5 mt-10 justify-center items-center  flex">
        <ToastContainer />
        <form className="grid grid-cols-1 md:grid-cols-4 gap-4" onSubmit={submitHandler}>
          {/*  Location Field */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 text-gray-700 font-semibold">
              <i className="ri-map-pin-line text-orange-500 text-2xl"></i>
              Location
            </label>
            <input
              type="text"
              placeholder="Where do you want to go?"
              className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400"
              ref={LocationRef}
            
            />
          </div>

          {/*  Distance Field */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 text-gray-700 font-semibold">
              <i className="ri-pin-distance-fill text-orange-500 text-2xl"></i>
              Distance
            </label>
            <input
              type="number"
              placeholder="Distance in km?"
              className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400"
              ref={distanceref}
              
            />
          </div>

          {/* Max People Field */}
        

          {/* 🔍 Search Button */}
          <div className="flex justify-center items-end">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-all" >
              <i className="ri-search-line mr-2"></i> Search
            </button>
          </div>
        </form>
      </div>
    );
  };

  export default SearchBar;
