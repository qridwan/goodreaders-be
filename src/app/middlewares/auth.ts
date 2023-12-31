/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../config';
import ApiError from '../../errors/ApiError';
import { jwtHelpers } from '../../helpers/jwtHelpers';

const auth = () => async (req: Request, res: Response, next: NextFunction) => {
  try {
    //get authorization token
    const token = req.headers.authorization;
    if (!token) {
      throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
    }
    // verify token
    let verifiedUser = null;

    verifiedUser = jwtHelpers.verifyToken(token, config.jwt.secret as Secret);
    if (!verifiedUser)
      throw new ApiError(
        httpStatus.FORBIDDEN,
        'Forbidden! You are not authorized'
      );

    req.user = verifiedUser; // role , id, phoneNumber

    // role diye guard korar jnno
    //   if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
    //     throw new ApiError(
    //       httpStatus.FORBIDDEN,
    //       'Forbidden! You are not authorized'
    //     );
    //   }
    next();
  } catch (error) {
    next(error);
  }
};

export default auth;
