import Review from "../models/reviewSchema.js";
import Tour from "../models/tourSchema.js";
import mongoose from "mongoose";

export const createReview = async (req, res, next) => {
  const tourId = req.params.tourId;

  // Validate if tourId is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(tourId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid tour ID",
    });
  }

  try {
    // Check if the tour exists
    const tour = await Tour.findById(tourId);
    if (!tour) {
      return res.status(404).json({
        success: false,
        message: "Tour not found",
      });
    }

    // (Optional) Prevent duplicate reviews by same user
    const existingReview = await Review.findOne({
      productID: tourId,
      username: req.body.username,
    });

    if (existingReview) {
      return res.status(400).json({
        success: false,
        message: "You have already reviewed this tour.",
      });
    }

    // Create and save the review
    const newReview = new Review({
      ...req.body,
      productID: tourId, // Important fix
    });

    const savedReview = await newReview.save();

    // Push review into tour document
    await Tour.findByIdAndUpdate(
      tourId,
      { $push: { reviews: savedReview._id } },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Review saved successfully",
      data: savedReview,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to submit review",
      error: error.message,
    });
  }
};
