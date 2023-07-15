import express from 'express';
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
router.get('/:id', BookController.getSingleBook);
router.get('/', BookController.getAllBooks);
router.delete('/:id', auth(), BookController.deleteBook);
router.patch(
  '/:id',
  validateRequest(BookValidation.updateBookZodSchema),
  auth(),
  BookController.updateBook
);

export const BookRoutes = router;
