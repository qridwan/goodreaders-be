import { Model, Types } from 'mongoose';

export type IWishlist = {
  userId: Types.ObjectId;
  bookId: Types.ObjectId;
};

export type WishlistModel = Model<IWishlist, Record<string, unknown>>;
