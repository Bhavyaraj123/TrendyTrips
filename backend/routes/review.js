import express from "express";
import { createReview } from "../Controllers/reviewController.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// POST a new review for a specific tour
router.post("/:tourId", verifyToken, createReview);

export default router;
