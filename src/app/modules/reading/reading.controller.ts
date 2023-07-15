/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IReading } from './reading.interface';
import { ReadingService } from './reading.service';

const addReading: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const ReadingData = req.body;
    const result = await ReadingService.addReading(ReadingData);

    sendResponse<IReading>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Reading created successfully',
      data: result,
    });
  }
);

// const getAllReadings = catchAsync(async (req: Request, res: Response) => {
//   const filters = pick(req.query, ReadingFilterableFields);

//   const paginationOptions = pick(req.query, paginationFields);

//   const result = await ReadingService.getAllReadings(filters, paginationOptions);

//   sendResponse<IReading[]>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Readings retrieved successfully',
//     meta: result.meta,
//     data: result.data,
//   });
// });

const getReadings = catchAsync(async (req: Request, res: Response) => {
  const { _id: id }: any = req.user;

  const result = await ReadingService.getReadings(id);

  sendResponse<IReading[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Reading retrieved successfully',
    data: result,
  });
});

// const updateReading = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const updatedData = req.body;
//   const { _id: userId }: any = req.user;

//   const result = await ReadingService.updateReading(id, updatedData, userId);

//   sendResponse<IReading>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Reading updated successfully',
//     data: result,
//   });
// });

const deleteReading = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const { _id: userId }: any = req.user;
  const result = await ReadingService.deleteReading(id, userId);
  sendResponse<IReading>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book successfully removed from reading list',
    data: result,
  });
});

export const ReadingController = {
  addReading,
  getReadings,
  deleteReading,
};
