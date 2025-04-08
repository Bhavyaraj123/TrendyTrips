import React from 'react';

const News = () => {
  return (
    <div className="px-6 py-12 text-center text-blue-500">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Subscribe for More Travel News
      </h2>
      <p className="text-lg mb-6">Stay updated with the latest travel trends and tips!</p>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full md:w-96 px-4 py-3 rounded-lg text-black focus:outline-blue-500 border-black border-2 focus:border-0"
        />
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default News;
