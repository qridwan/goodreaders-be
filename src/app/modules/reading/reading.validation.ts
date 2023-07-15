import { z } from 'zod';

const createReadingZodSchema = z.object({
  body: z.object({
    userId: z.string(),
    bookId: z.string(),
  }),
});

const updateReadingZodSchema = z.object({
  body: z.object({
    bookId: z.string(),
  }),
});
export const ReadingValidation = {
  updateReadingZodSchema,
  createReadingZodSchema,
};
