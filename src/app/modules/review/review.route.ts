import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { ReviewController } from './review.controller';
import { ReviewValidation } from './review.validation';
const router = express.Router();

router.post(
  '/',
  validateRequest(ReviewValidation.createReviewZodSchema),
  auth(),
  ReviewController.addReview
);
router.get('/:id', ReviewController.getReviews);
// router.delete('/:id', auth(), ReviewController.deleteReview);
// router.patch(
//   '/:id',
//   validateRequest(ReviewValidation.updateReviewZodSchema),
//   auth(),
//   ReviewController.updateReview
// );

export const ReviewRoutes = router;
