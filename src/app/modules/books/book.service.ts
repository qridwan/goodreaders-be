import httpStatus from 'http-status';
import { SortOrder } from 'mongoose';
import ApiError from '../../../errors/ApiError';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { BookSearchableFields } from './book.constant';
import { IBook, IBookFilters } from './book.interface';
import { Book } from './book.model';

const createBook = async (payload: IBook): Promise<IBook | null> => {
  const newBook = await Book.create(payload);

  return newBook;
};

const getSingleBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findOne({ _id: id }).populate('addedBy');
  return result;
};
const getGenreList = async (): Promise<string[] | null> => {
  try {
    const result = await Book.distinct('genre');
    return result as string[];
  } catch (error) {
    // Handle the error, if necessary
    console.error(error);
    return null;
  }
};

const deleteBook = async (
  id: string,
  userID: string
): Promise<IBook | null> => {
  const isExist = await Book.findOne({ _id: id, addedBy: userID });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book not found!');
  }
  const result = await Book.findByIdAndDelete(id);
  return result;
};

const updateBook = async (
  id: string,
  payload: Partial<IBook>,
  userId: string
): Promise<IBook | null> => {
  const isExist = await Book.findOne({ _id: id, addedBy: userId });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book not found!');
  }

  const { ...BookData } = payload;
  const updatedBookData: Partial<IBook> = { ...BookData };

  const result = await Book.findOneAndUpdate(
    { _id: id, addedBy: userId },
    updatedBookData,
    {
      new: true,
    }
  );
  return result;
};

const getAllBooks = async (
  filters: IBookFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IBook[]>> => {
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: BookSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: {
          $regex: value,
          $options: 'i',
        },
      })),
    });
  }

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Book.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit)
    .populate('addedBy');

  const count = await Book.countDocuments(whereConditions);
  return {
    meta: {
      page,
      limit,
      count,
    },
    data: result,
  };
};
const getFeatured = async (): Promise<IBook[]> => {
  const result = await Book.find()
    .sort({ createdAt: 'desc' })
    .populate('addedBy')
    .limit(10);

  return result;
};

export const BookService = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
  getGenreList,
  getFeatured,
};
