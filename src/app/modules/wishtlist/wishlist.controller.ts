/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IWishlist } from './wishlist.interface';
import { WishlistService } from './wishlist.service';

const addWishlist: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const WishlistData = req.body;
    const result = await WishlistService.addWishlist(WishlistData);

    sendResponse<IWishlist>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Wishlist created successfully',
      data: result,
    });
  }
);

const getWishlists = catchAsync(async (req: Request, res: Response) => {
  const { _id: id }: any = req.user;

  const result = await WishlistService.getWishlists(id);

  sendResponse<IWishlist[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Wishlist retrieved successfully',
    data: result,
  });
});

const deleteWishlist = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const { _id: userId }: any = req.user;

  const result = await WishlistService.deleteWishlist(id, userId);

  sendResponse<IWishlist>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book successfully removed from wishlist',
    data: result,
  });
});

export const WishlistController = {
  addWishlist,
  getWishlists,
  deleteWishlist,
};
