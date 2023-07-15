import { Model, Types } from 'mongoose';
import { IUser } from '../auth/auth.interface';

export type IBook = {
  title: string;
  author: string;
  genre: string;
  publication: string;
  addedBy: Types.ObjectId | IUser;
};

export type BookModel = Model<IBook, Record<string, unknown>>;

export type IBookFilters = {
  genre?: string;
  publication?: string;
  searchTerm?: string;
};
