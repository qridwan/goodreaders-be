import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { BookController } from './book.controller';
import { BookValidation } from './book.validation';
const router = express.Router();

router.post(
  '/',
  validateRequest(BookValidation.createBookZodSchema),
  auth(),
  BookController.createBook
);
router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.BUYER),
  BookController.getSingleBook
);
router.get('/all', auth(), BookController.getAllBooks);
router.delete('/:id', auth(), BookController.deleteBook);
router.patch(
  '/:id',
  validateRequest(BookValidation.updateBookZodSchema),
  auth(ENUM_USER_ROLE.SELLER),
  BookController.updateBook
);

export const BookRoutes = router;
