/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IReview } from './review.interface';
import { ReviewService } from './review.service';

const addReview: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const ReviewData = req.body;
    const result = await ReviewService.addReview(ReviewData);

    sendResponse<IReview>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Review created successfully',
      data: result,
    });
  }
);

// const getAllReviews = catchAsync(async (req: Request, res: Response) => {
//   const filters = pick(req.query, ReviewFilterableFields);

//   const paginationOptions = pick(req.query, paginationFields);

//   const result = await ReviewService.getAllReviews(filters, paginationOptions);

//   sendResponse<IReview[]>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Reviews retrieved successfully',
//     meta: result.meta,
//     data: result.data,
//   });
// });

const getReviews = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await ReviewService.getReviews(id);

  sendResponse<IReview[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review retrieved successfully',
    data: result,
  });
});

// const updateReview = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const updatedData = req.body;
//   const { _id: userId }: any = req.user;

//   const result = await ReviewService.updateReview(id, updatedData, userId);

//   sendResponse<IReview>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Review updated successfully',
//     data: result,
//   });
// });

// const deleteReview = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const { _id: userId }: any = req.user;

//   const result = await ReviewService.deleteReview(id, userId);

//   sendResponse<IReview>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Review deleted successfully',
//     data: result,
//   });
// });

export const ReviewController = {
  addReview,
  getReviews,
};
