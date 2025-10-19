// src/routes/bookingRoutes.ts
import express from 'express';
import { createBooking, getAllBookings } from '../controllers/bookingController';

const router = express.Router();

// Route for creating a new booking
router.post('/', createBooking);

// Route for getting all bookings
router.get('/', getAllBookings);

export default router;