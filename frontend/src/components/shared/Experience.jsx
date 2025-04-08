import React from 'react';
import { FaRocket, FaUsers, FaCalendarAlt } from 'react-icons/fa'; // Importing icons

const Experience = () => {
  return (
    <section className="text-gray-900 body-font py-12">
      <div className="container mx-auto px-5">
        <h1 className="text-4xl font-extrabold text-center text-orange-600 mb-10">
          🚀 Our Achievements
        </h1>
        <div className="flex flex-wrap -m-4 text-center justify-center">
          {/* Successful Trips */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-orange-500 bg-gradient-to-br from-orange-100 to-orange-50 text-orange-600 px-8 py-10 rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              <FaRocket className="text-orange-500 text-5xl mb-2 mx-auto" />
              <h2 className="title-font font-extrabold text-5xl">12K+</h2>
              <p className="leading-relaxed font-semibold text-lg mt-2">Successful Trips</p>
            </div>
          </div>
          {/* Regular Clients */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-orange-500 bg-gradient-to-br from-orange-100 to-orange-50 text-orange-600 px-8 py-10 rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              <FaUsers className="text-orange-500 text-5xl mb-2 mx-auto" />
              <h2 className="title-font font-extrabold text-5xl">2K+</h2>
              <p className="leading-relaxed font-semibold text-lg mt-2">Regular Clients</p>
            </div>
          </div>
          {/* Years of Experience */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-orange-500 bg-gradient-to-br from-orange-100 to-orange-50 text-orange-600 px-8 py-10 rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              <FaCalendarAlt className="text-orange-500 text-5xl mb-2 mx-auto" />
              <h2 className="title-font font-extrabold text-5xl">15+</h2>
              <p className="leading-relaxed font-semibold text-lg mt-2">Years Of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
