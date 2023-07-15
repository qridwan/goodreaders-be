import { IReview } from './review.interface';
import { Review } from './review.model';

const addReview = async (payload: IReview): Promise<IReview | null> => {
  const newReview = await Review.create(payload);

  return newReview;
};

const getReviews = async (id: string): Promise<IReview[] | null> => {
  const result = await Review.find({ bookId: id })
    .sort({ createdAt: 'desc' })
    .populate('reviewerId');
  return result;
};

// const deleteReview = async (
//   id: string,
//   userID: string
// ): Promise<IReview | null> => {
//   const isExist = await Review.findOne({ _id: id, addedBy: userID });

//   if (!isExist) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Review not found!');
//   }
//   const result = await Review.findByIdAndDelete(id);
//   return result;
// };

// const updateReview = async (
//   id: string,
//   payload: Partial<IReview>,
//   userId: string
// ): Promise<IReview | null> => {
//   const isExist = await Review.findOne({ _id: id, addedBy: userId });

//   if (!isExist) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Review not found!');
//   }

//   const { ...ReviewData } = payload;
//   const updatedReviewData: Partial<IReview> = { ...ReviewData };

//   const result = await Review.findOneAndUpdate(
//     { _id: id, addedBy: userId },
//     updatedReviewData,
//     {
//       new: true,
//     }
//   );
//   return result;
// };

export const ReviewService = {
  addReview,
  getReviews,
};
