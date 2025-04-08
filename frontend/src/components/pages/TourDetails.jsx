import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import { AuthContext } from "../../context/Authcontext";

const TourDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const { data: tour, loader, error } = useFetch(`${BASE_URL}/tours/${id}`);

  // Handling missing tour data
  const name = tour?.name || "Unknown Tour";
  const description = tour?.description || "No description available.";
  const price = tour?.price || 0;
  const image = tour?.image || "/default-image.jpg"; // Default image
  const address = tour?.address || "No address available";
  const reviews = tour?.reviews || [];
  const imageUrl = `http://localhost:8000/uploads/${image}`;

  // State for reviews
  const [localReviews, setLocalReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    reviewer: "",
    comment: "",
    rating: 0,
  });

  useEffect(() => {
    window.scroll(0, 0);
    if (reviews && reviews.length > 0 && localReviews.length === 0) {
      setLocalReviews(reviews);
    }
  }, [reviews, localReviews.length]);

  // Calculate average rating
  const totalRating = localReviews.reduce(
    (acc, item) => acc + (item.rating || 0),
    0
  );
  const rating =
    localReviews.length > 0
      ? (totalRating / localReviews.length).toFixed(1)
      : "No Ratings";

  // Handle Review Submission
  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (
      newReview.reviewer.trim() &&
      newReview.comment.trim() &&
      newReview.rating > 0
    ) {
      setLocalReviews([...localReviews, newReview]);
      setNewReview({ reviewer: "", comment: "", rating: 0 });
    } else {
      alert("Please fill all fields and provide a valid rating.");
    }
    if (!user || user === undefined || user === null) {
      alert("Please login first");
      return;
    }
    const reviewObj = {
      username: newReview.reviewer,
      reviewText: newReview.comment,
      rating: newReview.rating,
    };

    try {
      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Required if you want cookies/session
        body: JSON.stringify(reviewObj),
      });
      const result = await res.json();
      if (!res.ok) {
        alert(result.message);
      }
      alert("review submitted");
    } catch (error) {
      alert(error.message);
    }
  };

  // Loader & Error Handling
  if (loader) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-2xl">
        Loading...
      </div>
    );
  }

  if (error || !tour) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-2xl">
        <i className="ri-error-warning-line text-3xl mr-2"></i> Tour not found!
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
      <div className="max-w-5xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden">
        {/* Tour Image Section */}
        <div className="relative h-96 w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute top-4 right-4 bg-orange-500 text-white px-5 py-2 rounded-xl text-lg font-semibold shadow-md flex items-center">
            <i className="ri-money-dollar-circle-line text-xl mr-2"></i> ₹
            {price}/p
          </div>
        </div>

        {/* Tour Details Section */}
        <div className="p-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
            <h2 className="text-4xl font-bold text-gray-900 flex items-center">
              <i className="ri-map-pin-line text-orange-500 text-5xl mr-3"></i>{" "}
              {name}
            </h2>
            <p className="text-gray-700 text-lg font-semibold bg-gray-100 px-4 py-2 rounded-lg flex items-center">
              <i className="ri-map-2-line text-gray-500 text-xl mr-2"></i>{" "}
              {address}
            </p>
          </div>

          {/* Description */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex items-start gap-3">
            <i className="ri-information-line text-2xl text-gray-600"></i>
            <p className="text-gray-700 text-lg leading-relaxed">
              {description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex justify-center gap-3 items-center flex-row">
            <Link to="/tours">
              <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg text-lg hover:bg-gray-300 transition-all shadow-md">
                <i className="ri-arrow-left-line mr-2"></i> Back to Tours
              </button>
            </Link>
            <Link to={`/booking/${id}`}>
              <button className="px-6 py-3 bg-orange-500 text-white rounded-lg text-lg hover:bg-orange-600 transition-all shadow-lg">
                <i className="ri-shopping-cart-line mr-2"></i> Book Now
              </button>
            </Link>
          </div>

          {/* Rating Display */}
          <div className="flex justify-between items-center mt-6 border-t pt-4">
            <p className="text-gray-800 text-xl flex items-center font-semibold">
              <i className="ri-star-fill text-yellow-400 text-2xl mr-2"></i>{" "}
              {rating}
            </p>
          </div>

          {/* Reviews Section */}
          <div className="mt-8 border-t pt-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <i className="ri-user-star-line text-orange-500 text-3xl mr-2"></i>{" "}
              Traveler Reviews
            </h3>
            <div className="max-h-60 overflow-y-auto space-y-4">
              {localReviews.length > 0 ? (
                localReviews.map((review, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 p-4 rounded-lg shadow-md flex items-start gap-3"
                  >
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-bold text-xl">
                      <i className="ri-user-3-line"></i>
                    </div>
                    <div>
                      <p className="text-gray-900 font-semibold">
                        {review.reviewer || review.username}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {review.comment || review.reviewText}
                      </p>

                      <p className="text-yellow-500 flex items-center">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <i key={i} className="ri-star-fill text-lg"></i>
                        ))}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">
                  No reviews yet. Be the first to leave one!
                </p>
              )}
            </div>

            {/* Review Form */}
            <form
              onSubmit={handleReviewSubmit}
              className="mt-6 bg-gray-100 p-6 rounded-lg shadow-md"
            >
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                Leave a Review
              </h4>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md mb-3"
                value={newReview.reviewer}
                onChange={(e) =>
                  setNewReview({ ...newReview, reviewer: e.target.value })
                }
              />
              <textarea
                placeholder="Your Review"
                className="w-full px-4 py-2 border border-gray-300 rounded-md mb-3"
                value={newReview.comment}
                onChange={(e) =>
                  setNewReview({ ...newReview, comment: e.target.value })
                }
              />

              {/* Star Rating Input */}
              <div className="flex gap-2 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className={`text-2xl ${
                      newReview.rating >= star
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    onClick={() => setNewReview({ ...newReview, rating: star })}
                  >
                    ★
                  </button>
                ))}
              </div>

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
