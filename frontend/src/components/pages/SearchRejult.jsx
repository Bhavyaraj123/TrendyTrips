import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const TourDetails = () => {
  const { id } = useParams();
  const { data: getsingleTour, loader, error } = useFetch(`${BASE_URL}/tours/${id}`);

  if (loader) {
    return <div className="min-h-screen flex items-center justify-center text-gray-500 text-2xl">Loading...</div>;
  }

  if (error || !getsingleTour) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-2xl">
        <i className="ri-error-warning-line text-3xl mr-2"></i> Tour not found!
      </div>
    );
  }

  const { _id, name, description, price, image, address, reviews } = getsingleTour;
  const [localReviews, setLocalReviews] = useState(reviews || []);
  const [newReview, setNewReview] = useState({ reviewer: "", comment: "", rating: 0 });

  useEffect(() => {
    if (reviews) setLocalReviews(reviews);
  }, [reviews]);

  const totalRating = localReviews.reduce((acc, item) => acc + item.rating, 0);
  const rating = localReviews.length > 0 ? (totalRating / localReviews.length).toFixed(1) : "No Ratings";

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.reviewer && newReview.comment && newReview.rating > 0) {
      setLocalReviews([...localReviews, newReview]);
      setNewReview({ reviewer: "", comment: "", rating: 0 });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
      <div className="max-w-5xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="relative h-96 w-full overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute top-4 right-4 bg-orange-500 text-white px-5 py-2 rounded-xl text-lg font-semibold shadow-md flex items-center">
            <i className="ri-money-dollar-circle-line text-xl mr-2"></i> ₹{price}/p
          </div>
        </div>
        <div className="p-8">
          <h2 className="text-4xl font-bold text-gray-900 flex items-center">
            <i className="ri-map-pin-line text-orange-500 text-5xl mr-3"></i> {name}
          </h2>
          <p className="text-gray-700 text-lg font-semibold bg-gray-100 px-4 py-2 rounded-lg flex items-center">
            <i className="ri-map-2-line text-gray-500 text-xl mr-2"></i> {address}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">{description}</p>
          <div className="mt-8 flex justify-between items-center">
            <p className="text-gray-800 text-xl flex items-center font-semibold">
              <i className="ri-star-fill text-yellow-400 text-2xl mr-2"></i> {rating}
            </p>
            <Link to={`/booking/${id}`}>
              <button className="px-6 py-3 bg-orange-500 text-white rounded-lg text-lg hover:bg-orange-600 transition-all shadow-lg">
                <i className="ri-shopping-cart-line mr-2"></i> Book Now
              </button>
            </Link>
          </div>
          <div className="mt-8 border-t pt-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              <i className="ri-user-star-line text-orange-500 text-3xl mr-2"></i> Traveler Reviews
            </h3>
            <div className="max-h-60 overflow-y-auto space-y-4">
              {localReviews.length > 0 ? (
                localReviews.map((review, index) => (
                  <div key={index} className="bg-white border p-4 rounded-lg shadow-md">
                    <p className="text-gray-900 font-semibold">{review.reviewer}</p>
                    <p className="text-gray-600">{review.comment}</p>
                    <p className="text-yellow-500">
                      {Array.from({ length: review.rating }).map((_, index) => (
                        <i key={index} className="ri-star-fill text-lg"></i>
                      ))}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No reviews yet. Be the first to leave one!</p>
              )}
            </div>
            <form onSubmit={handleReviewSubmit} className="mt-6 bg-gray-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Leave a Review</h4>
              <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-md mb-3" value={newReview.reviewer}
                onChange={(e) => setNewReview({ ...newReview, reviewer: e.target.value })} />
              <textarea placeholder="Your Review" className="w-full px-4 py-2 border rounded-md mb-3" value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })} />
              <button className="px-6 py-3 bg-orange-500 text-white rounded-lg text-lg hover:bg-orange-600 transition-all shadow-lg">
                <i className="ri-send-plane-line mr-2"></i> Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
