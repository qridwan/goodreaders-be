import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { WishlistController } from './wishlist.controller';
import { WishlistValidation } from './wishlist.validation';
const router = express.Router();

router.post(
  '/',
  validateRequest(WishlistValidation.createWishlistZodSchema),
  auth(),
  WishlistController.addWishlist
);
router.get('/', WishlistController.getWishlists);
router.delete('/:id', auth(), WishlistController.deleteWishlist);

export const WishlistRoutes = router;
