import { z } from 'zod';

const createReviewZodSchema = z.object({
  body: z.object({
    review: z.string(),
    reviewerId: z.string(),
    bookId: z.string(),
  }),
});

const updateReviewZodSchema = z.object({
  body: z.object({
    review: z.string(),
  }),
});
export const ReviewValidation = {
  updateReviewZodSchema,
  createReviewZodSchema,
};
