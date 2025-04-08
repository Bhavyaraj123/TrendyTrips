import React from "react";
import { motion } from "framer-motion";
import News from '../shared/News.jsx'
import  Footer from '../footer/Footer.jsx'
import India from '../../assets/images/india.jpg'
const About= () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="w-full py-16 px-6 md:px-20 text-center bg-gradient-to-br from-orange-100 via-white to-yellow-50">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-orange-500 mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About TrendyTrips ✈️
        </motion.h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore India like never before. TrendyTrips is your go-to travel partner for unforgettable journeys across the nation—whether by road, rail, or air.
        </p>
      </div>

      {/* Section with image and text */}
      <div className="py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
        <motion.img
          src={India}
          alt="India Travel"
          className="w-full md:w-1/2 rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        />
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-semibold text-orange-500 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At TrendyTrips, we curate experiences—not just tours. From the snow-clad Himalayas to the sunny beaches of Goa, we ensure a smooth travel experience via rail, road, or air. Our experts plan, organize, and manage everything to give you hassle-free adventures across India.
          </p>
        </motion.div>
      </div>

      {/* Highlights Section */}
      <div className="bg-orange-50 py-12 px-6 md:px-20 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-8">What We Offer</h3>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Pan India Coverage",
              desc: "From Kashmir to Kanyakumari, we’ve got it all covered.",
              img: '../../assets/images/india.jpg'
            },
            {
              title: "Multi-Mode Trips",
              desc: "Travel via railways, roads, or flights—your comfort, our priority.",
              img: "/images/train_plane.png"
            },
            {
              title: "Affordable Plans",
              desc: "Pocket-friendly yet luxurious travel packages for everyone.",
              img: "/images/discount.png"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <h4 className="text-xl font-bold text-orange-500">{item.title}</h4>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* News section */}
      <News />

    
    </div>
  );
};

export default About;