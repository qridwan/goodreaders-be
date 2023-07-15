import { z } from 'zod';

const createWishlistZodSchema = z.object({
  body: z.object({
    userId: z.string(),
    bookId: z.string(),
  }),
});

const updateWishlistZodSchema = z.object({
  body: z.object({
    bookId: z.string(),
  }),
});
export const WishlistValidation = {
  updateWishlistZodSchema,
  createWishlistZodSchema,
};
