import React from 'react';

const Subtitles = ({ Subtitles }) => {
  return (
    <div className="flex justify-center md:justify-start mt-10">
      <h2 className="bg-orange-400 px-6 py-3 rounded-2xl text-gray-800 italic text-2xl font-medium text-center md:text-left w-full md:w-auto">
        {Subtitles}
      </h2>
    </div>
  );
};

export default Subtitles;
