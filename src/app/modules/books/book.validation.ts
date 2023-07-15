import { z } from 'zod';
import {
  BookBreedEnum,
  BookCategoryEnum,
  BookLabelEnum,
  BookLocationEnum,
} from './book.constant';

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
    name: z.string().optional(),
    age: z.number().optional(),
    seller: z.string().optional(),
    price: z.number().optional(),
    weight: z.number().optional(),
    location: z
      .enum([...BookLocationEnum] as [string, ...string[]], {
        required_error: 'Location must required/invalid',
      })
      .optional(),
    breed: z
      .enum([...BookBreedEnum] as [string, ...string[]], {
        required_error: 'Breed is required/invalid',
      })
      .optional(),
    label: z
      .enum([...BookLabelEnum] as [string, ...string[]], {
        required_error: 'Label is required/invalid',
      })
      .optional(),
    category: z
      .enum([...BookCategoryEnum] as [string, ...string[]], {
        required_error: 'Category is required/invalid',
      })
      .optional(),
  }),
});
export const BookValidation = {
  updateBookZodSchema,
  createBookZodSchema,
};
