import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IReading } from './reading.interface';
import { Reading } from './reading.model';

const addReading = async (payload: IReading): Promise<IReading | null> => {
  const isExist = await Reading.find({
    bookId: payload.bookId,
    userId: payload.userId,
  });

  if (isExist.length > 0) {
    throw new ApiError(httpStatus.CONFLICT, 'Already add on Reading!');
  }
  const newReading = await Reading.create(payload);

  return newReading;
};

const getReadings = async (id: string): Promise<IReading[] | null> => {
  const result = await Reading.find({ userId: id })
    .sort({ createdAt: 'desc' })
    .populate('bookId');
  return result;
};

const deleteReading = async (
  id: string,
  userID: string
): Promise<IReading | null> => {
  const isExist = await Reading.findOne({ _id: id, userId: userID });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Reading not found!');
  }
  const result = await Reading.findByIdAndDelete(id);
  return result;
};

export const ReadingService = {
  addReading,
  getReadings,
  deleteReading,
};
