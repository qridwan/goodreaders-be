import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import {
  ILogin,
  ILoginResponse,
  IRefreshTokenResponse,
  IUser,
} from './auth.interface';
import { Auth } from './auth.model';

const signUpUser = async (user: IUser): Promise<ILoginResponse | null> => {
  const newUser = await Auth.create(user);

  const accessToken = jwtHelpers.createToken(
    { fullName: newUser.fullName, _id: newUser.id, email: newUser.email },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  const refreshToken = jwtHelpers.createToken(
    { fullName: newUser.fullName, _id: newUser.id, email: newUser.email },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
    user: newUser,
  };
};

const loginUser = async (payload: ILogin): Promise<ILoginResponse> => {
  const { email, password } = payload;

  const isUserExist = await Auth.isUserExist(email);

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }

  if (
    isUserExist.password &&
    !(await Auth.isPasswordMatched(password, isUserExist.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
  }

  //create access token & refresh token

  const { fullName, email: uEmail, id } = isUserExist;
  const accessToken = jwtHelpers.createToken(
    { _id: id, fullName, email: uEmail },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  const refreshToken = jwtHelpers.createToken(
    { _id: id, fullName, email: uEmail },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
    user: isUserExist,
  };
};

const refreshToken = async (token: string): Promise<IRefreshTokenResponse> => {
  //   console.log('token: ', token);
  let verifiedToken = null;
  try {
    verifiedToken = jwtHelpers.verifyToken(
      token,
      config.jwt.refresh_secret as Secret
    );
  } catch (err) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Invalid Refresh Token');
  }

  const { email } = verifiedToken;

  // tumi delete hye gso  kintu tumar refresh token ase
  // checking deleted user's refresh token

  const isUserExist = await Auth.isUserExist(email);
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }
  //generate new token

  const newAccessToken = jwtHelpers.createToken(
    {
      _id: isUserExist.id,
      email: isUserExist.email,
      fullName: isUserExist.fullName,
    },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  return {
    accessToken: newAccessToken,
  };
};

export const AuthService = {
  signUpUser,
  refreshToken,
  loginUser,
};
