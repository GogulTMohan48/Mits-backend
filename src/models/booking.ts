// src/models/Booking.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface IBooking extends Document {
  name: string;
  email: string;
  checkInDate: Date;
  checkOutDate: Date;
  createdAt: Date;
}

const BookingSchema: Schema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IBooking>('Booking', BookingSchema);
