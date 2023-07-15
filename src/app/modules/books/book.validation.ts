import { z } from 'zod';

const createBookZodSchema = z.object({
  body: z.object({
    title: z.string(),
    author: z.string(),
    addedBy: z.string(),
    genre: z.string(),
    publication: z.string(),
  }),
});

const updateBookZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    author: z.string().optional(),
    addedBy: z.string().optional(),
    genre: z.string().optional(),
    publication: z.string().optional(),
  }),
});
export const BookValidation = {
  updateBookZodSchema,
  createBookZodSchema,
};
