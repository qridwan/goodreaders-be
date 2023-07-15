import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { ReadingController } from './reading.controller';
import { ReadingValidation } from './reading.validation';
const router = express.Router();

router.post(
  '/',
  validateRequest(ReadingValidation.createReadingZodSchema),
  auth(),
  ReadingController.addReading
);
router.get('/', auth(), ReadingController.getReadings);
router.delete('/:id', auth(), ReadingController.deleteReading);

export const ReadingRoutes = router;
