// src/routes/bookingRoutes.ts
import { Router } from 'express';
import { createBooking, getAllBookings } from '../controllers/bookingController';
import { bookingValidationRules, validate } from '../middleware/validation';

const router = Router();

router.post('/', bookingValidationRules(), validate, createBooking);
router.get('/', getAllBookings);

export default router;
