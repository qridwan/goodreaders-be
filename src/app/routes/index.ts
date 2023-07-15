import express from 'express';

import { SignupRoutes } from '../modules/auth/auth.route';
import { BookRoutes } from '../modules/books/book.route';
import { ReviewRoutes } from '../modules/review/review.route';
import { WishlistRoutes } from '../modules/wishtlist/wishlist.route';

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
  {
    path: '/review',
    route: ReviewRoutes,
  },
  {
    path: '/wishlist',
    route: WishlistRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
