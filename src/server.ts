// src/server.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import bookingRoutes from './routes/bookingRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Body parser for JSON

// Define Routes
app.use('/api/bookings', bookingRoutes);

app.get('/', (req, res) => {
  res.send('Resort Booking API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
