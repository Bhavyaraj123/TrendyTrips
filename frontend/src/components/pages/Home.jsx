import React from "react";
import Subtitles from "../shared/Subtitles";
import home1 from "../../assets/images/home1.jpeg";
import home2 from "../../assets/images/home2.jpg";
import home3 from "../../assets/images/home3.mp4";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeatureToursList from "../feature-tours/FeatureToursList";
import Experience from "../shared/Experience";
import Gallery from "../imageGalllery/Gallery";
import Testimonial from "../testimonials/Testimonial";
import News from "../shared/News";

const Home = () => {
  return (
    <>
    <div className="flex flex-col md:justify-center  justify-center">
      {/* main home section */}
      <div className="px-4 md:px-20 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <Subtitles Subtitles={"Know before you go"} />
            <h2 className="text-[40px] md:text-[50px] font-semibold leading-tight mt-3">
              Travelling opens the doors to creating{" "}
              <span className="text-orange-400">memories</span>
            </h2>
            <p className="mt-5 text-lg font-medium tracking-normal">
              Welcome to TrendyTrips – Your Gateway to Unforgettable Journeys!
              🌟 Whether you're craving a relaxing beach escape, an adventurous
              mountain trek, or a cultural city tour, we've got the perfect trip
              for you.
            </p>
          </div>

          {/* Image & Video Gallery */}
          <div className="w-full md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px]">
            <img
              src={home1}
              alt="Scenic View"
              className="w-full border hover:transition-all hover:scale-110 h-[270px] object-cover rounded-lg shadow-lg"
            />
            <img
              src={home2}
              alt="Travel Spot"
              className="w-full h-[270px] border3 hover:transition-all hover:scale-110 object-cover rounded-lg mt-7 shadow-lg"
            />
            <video
              src={home3}
              controls
              className="w-full h-[270px] object-cover hover:transition-all border2 hover:scale-110 rounded-lg shadow-lg mt-14 aspect-video"
            />
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <SearchBar />

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 lg:px-20 gap-10">
          {/* Left Side - Text Content */}
          <div className="w-full md:w-[40%] space-y-6">
            <h3 className="bg-orange-400 px-6 py-3 rounded-2xl text-gray-800 italic text-2xl font-medium flex items-center justify-center">
              What We Serve
            </h3>

            <h2 className="text-gray-800 text-3xl md:text-5xl font-bold leading-tight">
              We Offer Our Best Services
            </h2>
            <p className="text-gray-600 text-lg">
              Discover world-class services tailored for your dream journey.
              Whether you need a weather forecast, a tour guide, or a custom
              itinerary, we've got you covered! 🌍✨
            </p>
          </div>

          {/* Right Side - Service Cards */}
          <div className="w-full md:w-[60%] flex justify-center">
            <ServiceList />
          </div>
        </div>
      </section>

      {/* feature tour secction */}
      <section className="px-20 py-24">
      <div className="w-full md:w-[40%] space-y-6">
       <Subtitles Subtitles={"Explore"}/>
          </div>
        <FeatureToursList/>
      </section>



      {/* exerience section  */}
      <section className="py-16 bg-gray-50">
        <Experience/>
      </section>


      {/* gallery section  */}
      <section className="py-16 bg-white">
        <Gallery/>
</section>

{/* testimonials sections */}
<section className="py-16 ">
  <Testimonial/>
</section>

{/* test paper and subscrib page */}
<section className="news ">
<News/>
</section>


</div>
    </>
  );
};

export default Home;
