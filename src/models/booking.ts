// src/models/Booking.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface IBooking extends Document {
  name: string;
  email: string;
  checkInDate: Date;
  checkOutDate: Date;
}

const BookingSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
}, {
  timestamps: true, // This adds `createdAt` and `updatedAt` fields
});

export default mongoose.model<IBooking>('Booking', BookingSchema);