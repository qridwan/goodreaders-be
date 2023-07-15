import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IWishlist } from './wishlist.interface';
import { Wishlist } from './wishlist.model';

const addWishlist = async (payload: IWishlist): Promise<IWishlist | null> => {
  const isExist = await Wishlist.find({
    bookId: payload.bookId,
    userId: payload.userId,
  });

  if (isExist.length > 0) {
    throw new ApiError(httpStatus.CONFLICT, 'Already add on wishlist!');
  }
  const newWishlist = await Wishlist.create(payload);

  return newWishlist;
};

const getWishlists = async (id: string): Promise<IWishlist[] | null> => {
  const result = await Wishlist.find({ userId: id })
    .sort({ createdAt: 'desc' })
    .populate('bookId');
  return result;
};

// const deleteWishlist = async (
//   id: string,
//   userID: string
// ): Promise<IWishlist | null> => {
//   const isExist = await Wishlist.findOne({ _id: id, addedBy: userID });

//   if (!isExist) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Wishlist not found!');
//   }
//   const result = await Wishlist.findByIdAndDelete(id);
//   return result;
// };

// const updateWishlist = async (
//   id: string,
//   payload: Partial<IWishlist>,
//   userId: string
// ): Promise<IWishlist | null> => {
//   const isExist = await Wishlist.findOne({ _id: id, addedBy: userId });

//   if (!isExist) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Wishlist not found!');
//   }

//   const { ...WishlistData } = payload;
//   const updatedWishlistData: Partial<IWishlist> = { ...WishlistData };

//   const result = await Wishlist.findOneAndUpdate(
//     { _id: id, addedBy: userId },
//     updatedWishlistData,
//     {
//       new: true,
//     }
//   );
//   return result;
// };

export const WishlistService = {
  addWishlist,
  getWishlists,
};
