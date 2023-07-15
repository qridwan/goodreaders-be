import { Schema, model } from 'mongoose';
import { IReading, ReadingModel } from './reading.interface';

const ReadingSchema = new Schema<IReading>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    bookId: {
      type: Schema.Types.ObjectId,
      ref: 'Book',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);
export const Reading = model<IReading, ReadingModel>('Reading', ReadingSchema);
