import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Rahul Sharma",
    review: "TrendyTrips made my trip to Goa unforgettable! The recommendations were spot on.",
    location: "Mumbai, India",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Priya Verma",
    review: "A perfect travel guide for first-time visitors. Loved the experience!",
    location: "Delhi, India",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Amit Patel",
    review: "Easy booking and fantastic support! Highly recommend TrendyTrips.",
    location: "Ahmedabad, India",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    name: "Jigna Vaghela",
    review: "Easy booking and fantastic support! Highly recommend TrendyTrips.",
    location: "Kerala, India",
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  },
];

const TestimonialSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
      swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <div className="bg-orange-400 py-10 px-20 text-white text-center relative flex flex-col items-center w-full">
      <h2 className="text-3xl font-bold mb-6">What Our Travelers Say</h2>
      <div className="w-full max-w-5xl relative">
        <Swiper
          ref={swiperRef} // Reference to Swiper instance
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="bg-white text-black p-6 rounded-xl shadow-lg flex flex-col items-center w-full max-w-sm mx-auto">
              <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mb-4" />
              <p className="text-lg italic text-center">"{testimonial.review}"</p>
              <h4 className="mt-4 font-bold">- {testimonial.name}</h4>
              <span className="text-sm text-gray-600">{testimonial.location}</span>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom navigation arrows */}
        <div
          ref={prevRef}
          className="absolute top-1/2 left-[-50px] transform -translate-y-1/2 z-10 cursor-pointer text-3xl text-white"
        >
          ❮
        </div>
        <div
          ref={nextRef}
          className="absolute top-1/2 right-[-50px] transform -translate-y-1/2 z-10 cursor-pointer text-3xl text-white"
        >
          ❯
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
