import { Model, Types } from 'mongoose';

export type IReview = {
  reviewerId: Types.ObjectId;
  bookId: Types.ObjectId;
  review: string;
};

export type ReviewModel = Model<IReview, Record<string, unknown>>;
