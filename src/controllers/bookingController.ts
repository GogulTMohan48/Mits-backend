// src/controllers/bookingController.ts
import { Request, Response } from 'express';
import Booking from '../models/Booking';

export const createBooking = async (req: Request, res: Response) => {
  try {
    const { name, email, checkInDate, checkOutDate } = req.body;
    const newBooking = new Booking({ name, email, checkInDate, checkOutDate });
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ message: 'Server error while creating booking.', error });
  }
};

export const getAllBookings = async (req: Request, res: Response) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error while fetching bookings.', error });
  }
};
