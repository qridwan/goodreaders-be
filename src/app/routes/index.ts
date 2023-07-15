import express from 'express';

import { SignupRoutes } from '../modules/auth/auth.route';
import { BookRoutes } from '../modules/books/book.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: SignupRoutes,
  },
  {
    path: '/book',
    route: BookRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
