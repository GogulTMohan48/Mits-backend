// src/config/db.ts
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;
    if (!mongoURI) {
      console.error('Error: MONGO_URI is not defined in the .env file.');
      process.exit(1);
    }
    // Mongoose will buffer operations, but awaiting ensures we catch initial connection errors.
    await mongoose.connect(mongoURI);
  } catch (err) {
    console.error('Failed to connect to MongoDB');
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error(err);
    }
    process.exit(1);
  }
};

// Listen for Mongoose events for better connection management
mongoose.connection.on('connected', () => {
  console.log('MongoDB connected successfully.');
});

mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
});

export default connectDB;
