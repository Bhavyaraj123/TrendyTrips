import React from 'react';
import ServiceCard from './ServiceCard';
import weatherImage from '../../assets/images/weatherImage.png';
import guideImage from '../../assets/images/guideImage.png';
import customize from '../../assets/images/customize.png';

const ServiceList = () => {
    const services = [
        {
            imageUrl: weatherImage,
            title: "Calculate Weather",
            description: "Optimize your journey with real-time weather updates for safety, comfort, and adventure. 🚗✈🌍"
        },
        {
            imageUrl: guideImage,
            title: "Best Tour Guide",
            description: "Experience unforgettable adventures with our expert tour guides! 🗺️✨"
        },
        {
            imageUrl: customize,
            title: "Customization",
            description: "Plan your journey your way – personalized travel experiences just for you! 🌍🚗"
        }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
            {services.map((item, index) => (
                <ServiceCard key={index} item={item} />
            ))}
        </div>
    );
};

export default ServiceList;
