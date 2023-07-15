import { Model, Types } from 'mongoose';

export type IReading = {
  userId: Types.ObjectId;
  bookId: Types.ObjectId;
};

export type ReadingModel = Model<IReading, Record<string, unknown>>;
