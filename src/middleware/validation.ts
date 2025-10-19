// src/middleware/validation.ts
import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const bookingValidationRules = () => {
  return [
    body('name').trim().isLength({ min: 2 }).escape().withMessage('Name must be at least 2 characters long.'),
    body('email').isEmail().normalizeEmail().withMessage('Must be a valid email address.'),
    body('checkInDate').isISO8601().toDate().withMessage('Invalid check-in date.'),
    body('checkOutDate').isISO8601().toDate().withMessage('Invalid check-out date.')
      .custom((value, { req }) => {
        if (new Date(value) <= new Date(req.body.checkInDate)) {
          throw new Error('Check-out date must be after check-in date.');
        }
        return true;
      }),
  ];
};

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors: object[] = [];
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};
