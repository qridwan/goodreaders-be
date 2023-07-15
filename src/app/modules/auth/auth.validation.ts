import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    password: z.string(),
    fullName: z.string({
      required_error: 'Full name is required',
    }),
    email: z.string({
      required_error: 'Email is required',
    }),
  }),
});

const userLoginZodSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: 'Email is required',
    }),
    password: z.string({
      required_error: 'Password is required',
    }),
  }),
});

const refreshTokenZodSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({
      required_error: 'Refresh Token is required',
    }),
  }),
});

export const authValidation = {
  createUserZodSchema,
  userLoginZodSchema,
  refreshTokenZodSchema,
};
