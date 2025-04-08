import express from "express"
import { bookingRoute, getAllBooking, getBooking } from "../Controllers/bookingController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router()

router.post("/:id", verifyToken, bookingRoute);          // Book a tour
router.get("/single/:id", verifyUser, getBooking);       // Get one booking
router.get("/", verifyAdmin, getAllBooking);             // Get all bookings

export default router;
