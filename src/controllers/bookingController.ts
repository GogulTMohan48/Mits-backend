// src/controllers/bookingController.ts
import { Request, Response } from 'express';
import Booking from '../models/Booking';

/**
 * @desc    Create a new booking
 * @route   POST /api/bookings
 * @access  Public
 */
export const createBooking = async (req: Request, res: Response) => {
  try {
    const { name, email, checkInDate, checkOutDate } = req.body;

    const booking = new Booking({
      name,
      email,
      checkInDate,
      checkOutDate,
    });

    const createdBooking = await booking.save();
    res.status(201).json(createdBooking);
  } catch (error) {
    res.status(500).json({ message: 'Server Error: Could not create booking' });
  }
};

/**
 * @desc    Get all bookings
 * @route   GET /api/bookings
 * @access  Public
 */
export const getAllBookings = async (req: Request, res: Response) => {
  try {
    const bookings = await Booking.find({});
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server Error: Could not fetch bookings' });
  }
};