import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-300">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
        {/* Logo & Branding */}
        <div className="flex items-center space-x-3">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide">
            Trendy<span className="text-orange-500">Trips</span>
          </h2>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-500 hover:text-orange-500 transition">
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-orange-500 transition">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-orange-500 transition">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-orange-500 transition">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
        </div>

        {/* All Rights Reserved Text Inside Footer */}
        <p className="text-sm text-gray-500 mt-4 md:mt-0">
          © {new Date().getFullYear()} TrendyTrips. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
