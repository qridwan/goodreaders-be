/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export type IUser = {
  password: string;
  fullName: string;
  email: string;
  id?: string;
};

export type AuthModel = {
  isUserExist(
    email: string
  ): Promise<Pick<IUser, 'email' | 'fullName' | 'password' | 'id'>>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
} & Model<IUser>;
