import React from 'react';

const ServiceCard = ({ item }) => {
    const { imageUrl, title, description } = item;

    return (
        <div className="flex flex-col items-center gap-4 w-full max-w-[280px] bg-white shadow-lg hover:shadow-2xl transition-all duration-300 p-6 rounded-xl text-center border border-gray-200">
            {/* Image Wrapper */}
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-orange-100 p-3 shadow-md">
                <img src={imageUrl} alt={title} className="w-16 h-16 object-cover rounded-full" />
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold text-orange-500">{title}</h2>

            {/* Description */}
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    );
};

export default ServiceCard;
